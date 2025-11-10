import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "안녕, 프론트에서 요청 잘 받았어 👋" });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
