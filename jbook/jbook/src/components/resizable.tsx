import "./resizable.css";
import React from "react";
import { ResizableBox } from "react-resizable";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      minConstraints={[Infinity, 30]}
      height={300}
      width={Infinity}
      resizeHandles={["s"]}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
