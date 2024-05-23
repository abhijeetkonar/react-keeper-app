import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/keeper/keeperSlice"

function AddNotes() {

  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch()

  const addNotesHandler = (e) => {
    e.preventDefault()
    dispatch(addNote({ heading, content }))
    setHeading("")
    setContent("")
  }

  return (
    <form onSubmit={addNotesHandler}>
      <input
        name="title"
        onChange={e => setHeading(e.target.value)}
        value={heading}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={e => setContent(e.target.value)}
        value={content}
        placeholder="Take a note..."
        rows="3"
      />
      <button>Add</button>
    </form>
  )
}

export default AddNotes;
