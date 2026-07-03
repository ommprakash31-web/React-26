import React, { useState } from 'react'

const NoteForm = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    function handleClick(e){
        setTitle(e.target.value)

    }

    function handleDesc(e){
        setDesc(e.target.value)
    }

    const handleButton = () => {
        alert(`the values are ${title} and ${desc}`)
    }

  return (
    <div>
        <input value={title} onChange={handleClick} type="text" placeholder="Enter Title" />
        <textarea value={desc} onChange={handleDesc} type="text" placeholder="Enter Note"></textarea>
        <button onClick={handleButton}>Add Note</button>
    </div>
  )
}

export default NoteForm