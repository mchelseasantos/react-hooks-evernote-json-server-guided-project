import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, setNotes, setDisplayNote, search, newNote, setNewNote}) {

  const postNewNote = () => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        newNote
      )
    })
    .then((res) => res.json())
    .then((result) => setNotes([...notes, result]))
  }

  const handleNewNote=(e) => {
    postNewNote()
    // console.log('click');
  }
 
  return (
    <div className="master-detail-element sidebar">
      <NoteList 
      notes={notes} 
      setDisplayNote={setDisplayNote} 
      search={search} />

      <button onClick={handleNewNote}
      >New</button>
      
      </div>
  );
}

export default Sidebar;
