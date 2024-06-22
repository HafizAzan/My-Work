import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from "./NoteSlice"
export default configureStore({
    reducer: {
        notes: noteSliceReducer
    }
})