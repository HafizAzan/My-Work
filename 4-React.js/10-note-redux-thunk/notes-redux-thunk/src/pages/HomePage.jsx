import { collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../config/fireBase';
import NotesListing from '../components/NotesListing';
import CreateNotes from '../components/CreateNotes';

function HomePage() {
    const [notesData, setNotesData] = useState(null);
    const getNote = async () => {
        await getDocs(collection(db, "notes")).then((querySnapshot) => {
            console.log(querySnapshot);
            const notesResponsedata = querySnapshot?.docs?.map((singleDocument) => {
                return {
                    id: singleDocument.id,
                    ...singleDocument.data()
                }
            })
            setNotesData(notesResponsedata)
        })
    }

    return (
        <div className="container">
            <div className="row center-align">
                <CreateNotes getNote={getNote} />
                <NotesListing notesData={notesData} getNote={getNote} />
            </div>
        </div>
    )
}

export default HomePage
