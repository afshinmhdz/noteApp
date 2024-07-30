import { useState } from "react";
import "../src/App.css";
import "../src/index.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const handleDelete = (id) => {
    setNotes(() => notes.filter((item) => item.id !== id));
  };
  const handleCompleted = (id) => {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };
  return (
    <>
      <div className="container">
        <div className="note-header"></div>
        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="note-container">
            <NoteList
              notes={notes}
              onDeleteNote={handleDelete}
              onCompleteNote={handleCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
