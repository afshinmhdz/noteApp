import { useReducer, useState } from "react";
import "../src/App.css";
import "../src/index.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "handleAddNote": {
      return [...state, payload];
    }
    case "handelDelete": {
      return state.filter((item) => item.id !== payload);
    }
    case "handleComplete": {
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:throw new Error ("unknown error"+type)
  }
}
function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  //const [notes, setNotes] = useState([]);
  const [sortby, setSortby] = useState("latest");

  const handleAddNote = (newNote) => {
    dispatch({ type: "handleAddNote", payload: newNote });

    // setNotes((prevNotes) => {
    //   return [...prevNotes, newNote];
    // });
  };

  const handleDelete = (id) => {
    dispatch({ type: "handelDelete", payload: id });

    //setNotes(() => notes.filter((item) => item.id !== id));
  };
  const handleCompleted = (id) => {
    dispatch({ type: "handleComplete", payload: id });

    // setNotes((notes) =>
    //   notes.map((note) =>
    //     note.id === id ? { ...note, completed: !note.completed } : note
    //   )
    // );
  };

  let sortedNotes = notes;
  if (sortby === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  {
    /**[...notes] in this line for an shallow copy of array for not mutate state and we can write this line with another way => notes.slice().sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));  */
  }
  if (sortby === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortby === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );

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
              notes={sortedNotes}
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
