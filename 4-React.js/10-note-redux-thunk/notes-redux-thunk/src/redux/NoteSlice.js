import { createSlice } from "@reduxjs/toolkit"
import { addFavoriteNoteById, addNotesThunk, deleteNoteById, getNoteThunkMethod } from "./NoteThunk";

const initialState = {
    notes: [],
    loading: false,
}

const noteSlice = createSlice({
    name: "NotesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNoteThunkMethod.pending, (state) => {
            state.loading = true
        })

            .addCase(getNoteThunkMethod.fulfilled, (state, { payload }) => {
                state.loading = false
                state.notes = payload
            })

            .addCase(getNoteThunkMethod.rejected, (state) => {
                state.loading = false
            })

            //Favorite Thunk Method
            .addCase(addFavoriteNoteById.pending, (state) => {
                state.loading = true;
            })
            .addCase(addFavoriteNoteById.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addFavoriteNoteById.rejected, (state) => {
                state.loading = false;
            })

            //Delete Thunk Method
            .addCase(deleteNoteById.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteNoteById.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteNoteById.rejected, (state) => {
                state.loading = false;
            })


            //Add Note Thunk Method
            .addCase(addNotesThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(addNotesThunk.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addNotesThunk.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default noteSlice.reducer;