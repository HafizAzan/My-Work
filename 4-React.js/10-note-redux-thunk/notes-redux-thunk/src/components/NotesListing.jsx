import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotesListing({ notesData, getNote }) {
    useEffect(() => {
        getNote()
    }, []);


    return (
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
    )
}

export default NotesListing
