import React from "react";
import ShapeButton from "../components/ShapeButton";
import axios from "axios";
import "../styles/global.css";

const shapes = [
  { id: 1, type: "circle", color: "red" },
  { id: 2, type: "square", color: "blue" },
  { id: 3, type: "triangle", color: "green" },
];

const Home = () => {
  const handleClick = async (shape) => {
    try {
      await axios.post("/api/shape", shape);
      alert(`${shape.color} ${shape.type} 클릭됨!`);
    } catch (err) {
      console.error("서버 전송 오류:", err);
      alert("서버 연결 실패 😢");
    }
  };

  return (
    <div className="container">
      <h1>도형 선택 실험</h1>
      <div className="shape-container">
        {shapes.map((shape) => (
          <ShapeButton key={shape.id} shape={shape} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
