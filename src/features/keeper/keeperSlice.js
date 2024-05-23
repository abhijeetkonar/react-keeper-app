import { createSlice, nanoid } from '@reduxjs/toolkit'

const localNotes = localStorage.getItem('notes') != null ? JSON.parse(localStorage.getItem("notes")) : []

const initialState = {
    notes: localNotes
}

export const keeperSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const note = {
                id: nanoid(),
                heading: action.payload.heading,
                content: action.payload.content,
            }
            state.notes.push(note)
            localStorage.setItem("notes", JSON.stringify(state.notes.map(item=>item)))
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
            localStorage.setItem("notes", JSON.stringify(state.notes.map(item=>item)))
        }
    }
})

export const { addNote, removeNote } = keeperSlice.actions

export default keeperSlice.reducer;
