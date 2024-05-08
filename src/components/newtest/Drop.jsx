import React from "react";
import { useDroppable } from "@dnd-kit/core";
import "./Test.css";

export function Drop({ children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "white" : undefined,
  };

  return (
    <div ref={setNodeRef} className="container">
      {children}
    </div>
  );
}
