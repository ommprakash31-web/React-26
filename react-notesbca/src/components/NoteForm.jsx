import React, { useState } from "react";

const NoteForm = (addNote) => {
  const [title, setTitle] = useState(""); // UseState defined. Or you can say defination of useState.
  const [desc, setDesc] = useState(""); // UseState defined. Or you can say defination of useState.

  function handleClick(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  

  const handleButton = () => {
    alert(`the values are ${title} and ${desc}`);
  };

  return (
    <div className="note-form">
      <input
        value={title}
        onChange={handleClick}
        type="text"
        placeholder="Enter Title"
      />
      <textarea
        value={desc}
        onChange={handleDesc}
        type="text"
        placeholder="Enter Note"
      ></textarea>

      <button
        onClick={() => {
          addNote(title, desc);
          setTitle("");
          setDesc("");
        }}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteForm;
