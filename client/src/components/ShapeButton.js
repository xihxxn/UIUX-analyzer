import React, { useState } from "react";

const ShapeButton = ({ shape, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400); // 클릭 애니메이션 후 복귀
    onClick(shape);
  };

  const styles = {
    width: "120px",
    height: "120px",
    backgroundColor: shape.color,
    cursor: "pointer",
    borderRadius: shape.type === "circle" ? "50%" : "0",
    clipPath:
      shape.type === "triangle"
        ? "polygon(50% 0%, 0% 100%, 100% 100%)"
        : "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div
      className={clicked ? "clicked" : ""}
      style={styles}
      onClick={handleClick}
    ></div>
  );
};

export default ShapeButton;
