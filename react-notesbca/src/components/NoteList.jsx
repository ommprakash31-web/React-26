import React from "react";
import NoteCard from "./NoteCard.jsx";
const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <h2>No records found!</h2>;
  }
  return (
    <div className="note-list">
      {notes.map((note) => (
        
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            desc={note.desc}
            deleteNote={deleteNote}
          />
        
      ))};
    </div>
  );
};

export default NoteList;
