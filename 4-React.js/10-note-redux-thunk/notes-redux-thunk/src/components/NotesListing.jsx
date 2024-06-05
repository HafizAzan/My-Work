import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../config/fireBase';
import CustomSpinner from './customSpinner';

function NotesListing({ notesData, getNote }) {
    const [dropDownValue, setDropDownValue] = useState(null);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        getNote()
    }, []);

    const favoriteBtnChanger = async (singleKey) => {
        setLoader(true)
        const RefrenceDocument = await doc(db, "notes", singleKey?.id);
        await updateDoc(RefrenceDocument, {
            ...singleKey,
            favorite: !singleKey?.favorite
        })

        await getNote();
        setLoader(false)
    }


    const DeleteNoteHanlder = async (singleKey) => {
        setLoader(true)
        const RefrenceDocument = await doc(db, "notes", singleKey?.id);
        await deleteDoc(RefrenceDocument)

        await getNote();
        setLoader(false)
    }

    const onChangeDropdown = (event) => {
        setDropDownValue(event.target.value)
    }

    const FilterData =
        dropDownValue === "true"
            ? notesData?.filter((singleNote) => singleNote?.favorite === true)
            : notesData;


    return (
        <div className="col s5">
            <select class="browser-default mt-60" onChange={onChangeDropdown}>
                <option value="" disabled selected>
                    Select Favorite Notes
                </option>
                <option value="false">Show All Notes</option>
                <option value="true">Only Favorite Notes</option>
            </select>
            <div className="notesList">
                <CustomSpinner loading={loader} />
                {FilterData?.map((singleKey) => {
                    return (
                        <div className="note  white">
                            <div className="right-align">
                                <i
                                    className="material-icons red-text"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => favoriteBtnChanger(singleKey)}
                                >
                                    {singleKey?.favorite ? "favorite " : "favorite_border"}
                                </i>
                                <i className="material-icons" style={{ cursor: "pointer" }}
                                    onClick={() => DeleteNoteHanlder(singleKey)}
                                >
                                    delete
                                </i>
                            </div>
                            <Link to="">
                                <h5 className="black-text"> {singleKey?.title}</h5>
                            </Link>
                            <p className="truncate">{singleKey?.content}</p>
                            <div className="right-align">
                                <Link to="">
                                    <i
                                        className="material-icons black-text"
                                        style={{ cursor: "pointer" }}
                                    >
                                        edit
                                    </i>
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default NotesListing
