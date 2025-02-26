import { useState } from "react";
import "./App.css";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (noteTitle.trim() === "") {
      return alert("Please provide a Title");
    }
    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  const removeHandler = (noteId) => {
    const updateNotes = notes.filter((item) => item.id !== noteId);

    setNotes(updateNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  const updateHandler = () => {
    const updatedNotes = notes.map(item =>{
      if(item.id === editableNote.id){
        return {...item, title: noteTitle};
      }
      return item;
    });
    setNotes(updatedNotes);
    setEditMode(false);
    setNoteTitle("");
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={noteTitle} onChange={changeTitleHandler} />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>

      <div className="note-list">
        <h2>All Notes</h2>
        <ul>
          {notes.map((note) => (
            <>
              <li key={note.id}>
                <span>{note.title}</span>
                <button onClick={() => editHandler(note)}>Edit</button>
                <button onClick={() => removeHandler(note.id)}>Delete</button>
              </li>
              <br />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
