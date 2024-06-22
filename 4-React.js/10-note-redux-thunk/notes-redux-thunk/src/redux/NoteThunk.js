import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/fireBase";

export const getNoteThunkMethod = createAsyncThunk("getNotes", async () => {
    try {
        let notes = null
        await getDocs(collection(db, "notes")).then((querySnapshot) => {
            console.log(querySnapshot);
            const notesResponsedata = querySnapshot?.docs?.map((singleDocument) => {
                return {
                    id: singleDocument.id,
                    ...singleDocument.data()
                }
            })
            notes = notesResponsedata
        })
        return notes
    } catch (error) {
        console.log(error);
    }
})