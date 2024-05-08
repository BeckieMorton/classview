import React, { useState } from "react";

import "./test.css";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const defaultCoordinates = {
  x: 100,
  y: 100,
};

const DraggableItem = ({ label, style, top, left }) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: "draggable",
    });

  // Additional styling for border, border radius, and padding
  const itemStyle = {
    ...style,
    position: "absolute",
    top,
    left,
    border: "1px solid black", // 1px black solid border
    borderRadius: "10px", // border-radius of 10px
    padding: "10px", // padding of 10px
    // Apply transform while dragging
    transform: isDragging
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none",
    // Ensure smooth transition while dragging
    transition: isDragging ? "none" : "transform 0.3s ease",
    zIndex: isDragging ? 9999 : "auto", // Ensure item appears above other elements while dragging
  };

  return (
    <div ref={setNodeRef} {...attributes} style={itemStyle}>
      <div {...listeners}>{label}</div>
    </div>
  );
};

const DraggableStory = ({
  activationConstraint,
  axis,
  handle,
  label = "Go ahead, drag me.",
  modifiers,
  style,
  buttonStyle,
}) => {
  const [{ x, y }, setCoordinates] = useState(defaultCoordinates);

  const mouseSensor = useSensor(MouseSensor, { activationConstraint });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ delta }) => {
        setCoordinates(({ x, y }) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
      modifiers={modifiers}
    >
      <DraggableItem
        axis={axis}
        label={label}
        handle={handle}
        top={y}
        left={x}
        style={style}
        buttonStyle={buttonStyle}
      />
    </DndContext>
  );
};

export const BasicSetup = () => <DraggableStory />;
