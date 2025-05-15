import React from "react";
import "./styles1.css";
function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    props.onEdit(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Note;