import React, { useState, useEffect } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    if (props.editingNote) {
      setNote(props.editingNote);
    } else {
      setNote({ title: "", content: "" });
    }
  }, [props.editingNote]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  const submitNote = (event) => {
    event.preventDefault();
    if (note.title.trim() === "" && note.content.trim() === "") {
      alert("Please enter a title or content before adding a note.");
      return;
    }
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="p-4 bg-white rounded shadow mb-4">
        <input
          className="form-control mb-2"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="form-control mb-2"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="btn btn-warning" onClick={submitNote}>
          {props.isEditing ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;