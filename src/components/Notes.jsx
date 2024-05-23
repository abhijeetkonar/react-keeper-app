import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeNote } from "../features/keeper/keeperSlice"
import deleteBtn from "../assets/delete.png"

const Notes = () => {

  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  return (
    <>
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <h1>{note.heading}</h1>
          <p>{note.content}</p>
          <button onClick={() => dispatch(removeNote(note.id))}>
            <img src={deleteBtn} alt="delete" />
          </button>
        </div>
      ))}
    </>
  )
}

export default Notes
