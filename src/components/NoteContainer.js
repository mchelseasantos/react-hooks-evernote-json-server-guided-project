import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
const [notes, setNotes] = useState([]);
const [displayNote, setDisplayNote] = useState({});
const [search, setSearch] = useState("");
const [newNote, setNewNote] = useState({
  "userId": 1,
  "title": "default",
  "body": "placeholder",
})

  const getNotes = () => {
    fetch("http://localhost:3000/notes")
    .then(resp => resp.json())
    .then(data => setNotes(data));
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="container">
        <Sidebar 
        notes={notes} 
        setNotes={setNotes}
        setDisplayNote={setDisplayNote} 
        search={search}
        newNote={newNote}
        setNewNote={setNewNote} />
        <Content 
        notes={notes}
        setNotes={setNotes}
        displayNote={displayNote}
        setDisplayNote={setDisplayNote}
         />
      </div>
    </>
  );
}
export default NoteContainer;
