import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteNoteById, deleteNoteById, getNoteThunkMethod } from '../redux/NoteThunk';

function NotesListing({ setEditData }) {
    const { notes: notesData, loading: reduxLoader } = useSelector((state) => state.notes)
    const dispatch = useDispatch()
    const [dropDownValue, setDropDownValue] = useState(null);
    useEffect(() => {
        dispatch(getNoteThunkMethod())
    }, []);

    const favoriteBtnChanger = async (singleKey) => {
        dispatch(addFavoriteNoteById(singleKey))
    }


    const DeleteNoteHanlder = async (singleKey) => {
        dispatch(deleteNoteById(singleKey))
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
                                        onClick={() => setEditData(singleKey)}
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
