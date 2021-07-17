import React, {useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({notes, setNotes, displayNote, setDisplayNote}) {
const [editNote, setEditNote] = useState(false)

  const getContent = () => {
    if (editNote) { //returns the keys of the object in a new array
      return <NoteEditor 
      notes={notes}
      setNotes={setNotes}
      editNote={editNote}
      setEditNote={setEditNote}
      setDisplayNote={setDisplayNote} />;
    } else if (Object.keys(displayNote).length) {
      return <NoteViewer displayNote={displayNote}
      editNote={editNote}
      setEditNote={setEditNote} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
