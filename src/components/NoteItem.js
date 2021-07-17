import React from "react";

function NoteItem({note, setDisplayNote}) {
  
  function handleClick() {
    setDisplayNote(note) 
  }
  
  return (
    <li onClick = {handleClick} 
    >
      <h2>{note.title}</h2>
      <p>{note.body.substr(0, 20)}...</p>
    </li>
  );
}

export default NoteItem;
