import "./test.css";
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

export const Draganddrop2 = () => {
  //for movement for the keyboard and mobile
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, useSensor(KeyboardSensor), {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="container">
      <h1>Drag and drop - Test 2</h1>
      <BasicSetup />
    </div>
  );
};
