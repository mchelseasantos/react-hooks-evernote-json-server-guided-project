import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, setDisplayNote, search}) {

  const displayNotes = () => {
    return filterNotes().map((note) => (
      <NoteItem key={note.id} note={note} setDisplayNote={setDisplayNote} />)
  )}

  const filterNotes = () => {
    return notes.filter((note) => (
      note.title.toLowerCase().includes(search.toLowerCase())
    ))
  }

  return (
    <ul>
      {displayNotes()}
    </ul>
  );
}

export default NoteList;
