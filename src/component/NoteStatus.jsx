import React from "react";

function NoteStatus({notes}) {

    let completed=0
    completed=notes.filter((item)=>item.completed===true).length;
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
        Open <span>{notes.length-completed}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
