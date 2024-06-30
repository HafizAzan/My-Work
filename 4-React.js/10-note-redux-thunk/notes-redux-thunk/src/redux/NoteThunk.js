import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
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

export const addFavoriteNoteById = createAsyncThunk("favNotes", async (singleNotes, { dispatch }) => {
    try {
        const RefrenceDocument = await doc(db, "notes", singleNotes?.id);
        await updateDoc(RefrenceDocument, {
            ...singleNotes,
            favorite: !singleNotes?.favorite
        })

        await dispatch(getNoteThunkMethod())
    } catch (error) {
        console.log(error);
    }
})

export const deleteNoteById = createAsyncThunk("delNotes", async (singleNotes, { dispatch }) => {
    try {
        const RefrenceDocument = await doc(db, "notes", singleNotes?.id);
        await deleteDoc(RefrenceDocument)

        await dispatch(getNoteThunkMethod())
    } catch (error) {
        console.log(error);
    }
})

export const addNotesThunk = createAsyncThunk("addNotes", async (payload, { dispatch }) => {
    try {
        await addDoc(collection(db, "notes"), payload)
        await dispatch(getNoteThunkMethod())
    } catch (error) {
        console.log(error);
    }
})

export const updateNotesThunk = createAsyncThunk("updateNotes", async (updatePayload, { dispatch }) => {
    try {
        const RefrenceDocument = await doc(db, "notes", updatePayload?.id);
        console.log(RefrenceDocument, "ref");
        await updateDoc(RefrenceDocument, updatePayload)
        await dispatch(getNoteThunkMethod())
    } catch (error) {
        console.log(error);
    }
})