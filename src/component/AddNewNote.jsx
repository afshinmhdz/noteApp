import "../App.css";
function AddNewNote() {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>  {/*onSubmit Event for user press enter - data in input send to server*/} 
        <input type="text" className="text-field" placeholder="titel"/>
        <input type="text" className="text-field" placeholder="description"/>
        <button type="submit" className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
