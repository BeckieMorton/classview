import "./Task.css";

import { useSortable } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

////-----DRAGGABLE-----////
export const Draggable = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "unique-id",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div>
        <p>here is a test</p>
      </div>
    </button>
  );
};

////-----DROPPABLE-----//
export const Droppable = () => {
  const { setNodeRef } = useDroppable({
    id: "unique-id",
  });

  return <div ref={setNodeRef}>/* Render whatever you like within */</div>;
};

///------ MAIN COMPONENT -----///
export const Task = ({ id, title }) => {
  //   const { attributes, listeners, setNodeRef, transform, transition } =
  //     useSortable({ id });
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="task"
    >
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  );
};
