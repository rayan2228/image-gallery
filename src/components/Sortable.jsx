import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragItem from "./DragItem";

export const Sortable = (props) => {
  // maintaining how to sort the data
  const sortable = useSortable({ id: props.url });

  // Destructuring variables from sortable
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  // some initial css
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    // return the drag item component with important props
    <DragItem
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
      src={props.url}
      alt={props.url}
      isDragging={isDragging}
      selectColor={props.selectColor}
      onChangeFun={props.onChangeFun}
      checked={props.checked}
    />
  );
};
