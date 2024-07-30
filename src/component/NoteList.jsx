function NoteList({ notes,onDeleteNote,onCompleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} onCompleteNote={onCompleteNote}/>
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note,onDeleteNote,onCompleteNote }) {
  const option = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <h2 className="title">{note.title}</h2>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button className="trash" onClick={()=>onDeleteNote(note.id)}>❌</button>
          <input type="checkbox" onChange={()=>onCompleteNote(note.id)}/>
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}
