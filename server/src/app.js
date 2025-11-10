import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// 테스트용 GET
app.get("/api/hello", (req, res) => {
  res.json({ message: "안녕, 프론트에서 요청 잘 받았어 👋" });
});

// 도형 클릭 로그 저장
app.post("/api/shape", (req, res) => {
  const shapeData = req.body;

  const logEntry = {
    ...shapeData,
    timestamp: new Date().toISOString(),
  };

  // logs.json 파일 경로
  const logFilePath = path.join(__dirname, "../logs.json");

  fs.readFile(logFilePath, "utf8", (err, data) => {
    let logs = [];
    if (!err && data) {
      try {
        logs = JSON.parse(data);
      } catch {
        logs = [];
      }
    }

    logs.push(logEntry);

    fs.writeFile(logFilePath, JSON.stringify(logs, null, 2), (err) => {
      if (err) {
        console.error("로그 저장 실패:", err);
        return res.status(500).json({ error: "로그 저장 실패" });
      }
      console.log("새 로그 저장됨:", logEntry);
      res.json({ status: "ok" });
    });
  });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
