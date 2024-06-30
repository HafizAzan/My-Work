import React, { useState } from 'react'
import NotesListing from '../components/NotesListing';
import CreateNotes from '../components/CreateNotes';
import CustomSpinner from '../components/customSpinner';
import { useSelector } from 'react-redux';

function HomePage() {
    const { loading: reduxLoader } = useSelector((state) => state.notes)
    const [EditData, setEditData] = useState(null)
    return (
        <div className="container">
            <div className="row center-align">
                <CustomSpinner loading={reduxLoader} />
                <CreateNotes EditData={EditData} setEditData={setEditData} />
                <NotesListing setEditData={setEditData} />
            </div>
        </div>
    )
}

export default HomePage
