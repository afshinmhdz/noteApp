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

  const handleDelete=(id)=>{
  setNotes(()=>notes.filter((item)=>item.id!==id))
  }
  return (
    <>
      <div className="container">
        <div className="note-header"></div>
        <div className="note-app">
          <AddNewNote onAddNote={handleAddNote} />
          <div className="note-container">
            <NoteList notes={notes} onDeleteNote={handleDelete}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
