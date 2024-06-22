import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notes: [],
    loading: false,
}

const noteSlice = createSlice({
    name: "NotesSlice",
    initialState,
    reducers: {},
})

export default noteSlice.reducer;