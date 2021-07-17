import React from "react";

function NoteEditor({notes, setNotes, editNote, setEditNote, setDisplayNote}) {

  const saveNote = () => {
    fetch(`http://localhost:3000/notes/${editNote.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        editNote
      )
    })
    .then((res) => res.json())
    .then((result) => {
      setEditNote(false)
      setDisplayNote(editNote)
      setNotes(notes.map((note) => {
      if (note.id===editNote.id) {
        return editNote
      } else {
        return note
      }
    }))
    setDisplayNote(result)
    setEditNote("")
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    saveNote()
  }

  const handleEditTitle = (e) => {
    setEditNote({...editNote, title: e.target.value})
  }

  const handleEditBody = (e) => {
    setEditNote({...editNote, body: e.target.value})
  }

  //Can refactor to this when more comfortable
  // const handleEdit = (e) => {
  //   setEditNote({...editNote, [e.target.name]: e.target.value})
  //   console.log(e.target.name)
  // } 

  return (
    <form onSubmit={handleForm}
    className="note-editor"> 
      <input
      onChange={handleEditTitle}
      value={editNote.title}
       type="text" 
       name="title" />
      <textarea 
      onChange={handleEditBody}
      value={editNote.body}
      name="body" />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button onClick={() => setEditNote("")} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
