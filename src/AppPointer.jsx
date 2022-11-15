/// onPointerMove 를 이용한 마우스 따라가기

import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPos({ x: e.clientX, y: e.clientY });

        // 만약 수평으로만 이동이 가능하다면 ?
        //setPos((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </div>
  );
}
