import "./test.css";
import { useState } from "react";
import { BasicSetup } from "./BasicSetup";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Column } from "./Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Input } from "./Input";

export const Draganddrop = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  //makes sure moved item stays in the new position
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  //for movement for the keyboard and mobile
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, useSensor(KeyboardSensor), {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="container">
      <h1>Drag and drop - Test 1</h1>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column tasks={tasks} /> <Input onSubmit={addTask} />
        {/* <Draggable /> */}
      </DndContext>
      <BasicSetup />
    </div>
  );
};
