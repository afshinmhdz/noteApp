function NoteHeader({notes,sortby,onSort}) {
  
  return (
    <div className='note-header'>
        <div>
          <h1>My Notes {notes.length}</h1>
        </div>
        <div>
          <select value={sortby}  onChange={onSort}>
            <option value="latest">Sort based on latest notes</option>
            <option value="earliest">Sort based on earliest notes</option>
            <option value="completed">Sort based on completed notes</option>
          </select>
        </div>
    </div>
  )
}

export default NoteHeader