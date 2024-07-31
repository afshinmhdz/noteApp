import { useState } from "react";
import "../src/App.css";
import "../src/index.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortby, setSortby] = useState("latest");
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

  let sortedNotes = notes;
  if (sortby === "earliest")
    sortedNotes=[...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  {
    /**[...notes] in this line for an shallow copy of array for not mutate state and we can write this line with another way => notes.slice().sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));  */
  }
  if (sortby === "latest")
    sortedNotes=[...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (sortby === "completed")
    sortedNotes=[...notes].sort((a, b) => Number((a.completed)) - Number((b.completed)));

  return (
    <>
      <div className="container">
        <div>
          <NoteHeader
            notes={notes}
            sortby={sortby}
            onSort={(e) => setSortby(e.target.value)}
          />
        </div>
        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="note-container">
            <NoteStatus notes={notes} />
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
