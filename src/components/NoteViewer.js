import React from "react";

function NoteViewer({displayNote, editNote, setEditNote}) {

  const handleClick = () => {
   setEditNote(displayNote)
  }

  return (
    <>
      <h2>{displayNote.title}</h2>
      <p>{displayNote.body}</p>
      <button onClick={handleClick} 
      >Edit</button>
    </>
  );
}

export default NoteViewer;
