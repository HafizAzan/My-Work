import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../config/fireBase';

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

    useEffect(() => {
        getNote()
    }, []);

    return (
        <div className="container">
            <div className="row center-align">
                <div className="col s7">
                    <div className="section form-container">
                        <form className="white">
                            <h5 className="grey-text text-darken-3">Create Note</h5>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="note_title"
                                        type="text"
                                        className="validate"
                                        name="title"
                                    />
                                    <label className="active">Title</label>
                                </div>
                            </div>

                            <div className="input-field col s12">
                                <textarea
                                    id="note_content"
                                    className="materialize-textarea"
                                    name="content"
                                ></textarea>
                                <label>Content</label>
                            </div>
                            <button className="btn green" type="submit">
                                Create Note
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col s5">
                    <div className="notesList">
                        {notesData?.map((singleKey) => {
                            return (
                                <div className="note  white">
                                    <div className="right-align">
                                        <i
                                            className="material-icons red-text"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {singleKey?.favorite ? "favorite " : "favorite_border"}
                                        </i>
                                        <i className="material-icons" style={{ cursor: "pointer" }}>
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
            </div>
        </div>
    )
}

export default HomePage
