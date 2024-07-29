import { useState } from "react";
import "../src/App.css";
import "../src/index.css"
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <div className="container">
        <div className="note-header"></div>
        <div className="note-app">
          <AddNewNote/>
          <div className="note-container">
            <NoteList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
