import { createSlice } from "@reduxjs/toolkit"
import { getNoteThunkMethod } from "./NoteThunk";

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
    }
})

export default noteSlice.reducer;