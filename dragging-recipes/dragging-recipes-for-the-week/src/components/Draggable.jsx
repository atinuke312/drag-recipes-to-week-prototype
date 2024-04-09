import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "primereact/card";

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    // argument: draggable needs an id to know which one to drag?
  });
  //const draggedId = props.id;
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <p>
      <button
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}

        // {...console.log(props.id)}
      >
        {<Card title={props.children}></Card>}
        {/* {props.children} */}
      </button>
    </p>
  );
}
