import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Drag } from "./Drag";
import { Drop } from "./Drop";
import "./Test.css";

export default function Test({ widgetChosen }) {
  const ComponentRender = widgetChosen;
  const notesData = [
    {
      id: "1",
      widget: widgetChosen,
      position: {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
      },
    },
  ];

  const [notes, setNotes] = useState(notesData);

  console.log(`inside test component the widget is:`, widgetChosen);

  function handleDragEnd(ev) {
    // It's not a sortable, it's a free drag and drop
    const note = notes.find((x) => x.id === ev.active.id);
    note.position.x += ev.delta.x;
    note.position.y += ev.delta.y;
    const _notes = notes.map((x) => {
      if (x.id === note.id) return note;
      return x;
    });
    setNotes(_notes);
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <Drop>
          {notes.map((note) => (
            <Drag
              styles={{
                position: "absolute",
                left: `${note.position.x}px`,
                top: `${note.position.y}px`,
              }}
              key={note.id}
              id={note.id}
              content={note.widget}
            />
          ))}
        </Drop>
      </DndContext>
    </>
  );
}
