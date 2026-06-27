import React from 'react'

const NotesForm = () => {
    const [title, setTitle] = usestate("");
    const [desc,setDesc] = usestate("");


    function handleChange(){
        console.log(e)
    }
  return (
    <div>
        <input value={title} onChange={handleChange} type="text" placeholder='enter title'/>
        <textarea placeholder='enter description'></textarea>
        <button>Add Notes</button>
    </div>
  )
}

export default NotesForm