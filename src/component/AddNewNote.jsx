import { useState } from "react";
import "../App.css";
function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /** for prevent refresh on first load */
    }
    const newNote = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
      
    });
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        {" "}
        {/*onSubmit Event for user press enter - data in input send to server*/}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          placeholder="titel"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          placeholder="description"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
