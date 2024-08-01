import React from "react";
import Message from "./Message";

function NoteStatus({ notes }) {
  if (!notes.length)
    return (
      <Message>
        <h2 className="message">✅ No Notes has already been added</h2>
      </Message>
    );
  let completed = 0;
  completed = notes.filter((item) => item.completed === true).length;
  console.log(completed);
  return (
    <ul className="note-status">
      <li>
        All <span>{notes.length}</span>
      </li>
      <li>
        Completed <span>{completed}</span>
      </li>
      <li>
        Open <span>{notes.length - completed}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
