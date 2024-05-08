import React from "react";
import { useDraggable } from "@dnd-kit/core";
import "./Test.css";

//this component is for the widget that moves
export function Drag({ id, content, styles }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      className="widget"
      ref={setNodeRef}
      style={{ ...style, ...styles }}
      {...listeners}
      {...attributes}
    >
      {content}
    </div>
  );
}
