import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addNote(newNote) {
    if (editIndex !== null) {
      setNotes(prevNotes =>
        prevNotes.map((note, idx) =>
          idx === editIndex ? newNote : note
        )
      );
      setEditIndex(null);
    } else {
      setNotes(prevNotes => [...prevNotes, newNote]);
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
    if (editIndex === id) setEditIndex(null);
  }

  function editNote(id) {
    setEditIndex(id);
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <CreateArea
          onAdd={addNote}
          editingNote={editIndex !== null ? notes[editIndex] : null}
          isEditing={editIndex !== null}
        />
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;