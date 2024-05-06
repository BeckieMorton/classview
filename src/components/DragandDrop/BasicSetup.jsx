import React, { useState } from "react";
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
  x: 0,
  y: 0,
};

const axis = {
  All: "All",
  Vertical: "Vertical",
  Horizontal: "Horizontal",
};

const DraggableItem = ({
  axis,
  label,
  style,
  top,
  left,
  handle,
  buttonStyle,
}) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: "draggable",
    });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{ ...style, position: "absolute", top, left }}
    >
      <div {...listeners}>
        {label}
        {isDragging && " (dragging)"}
      </div>
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
