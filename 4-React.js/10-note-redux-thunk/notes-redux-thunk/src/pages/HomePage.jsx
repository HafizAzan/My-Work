import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
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
                        <div class="switch left-align">
                            <label style={{ fontSize: "20px" }}>
                                <input type="checkbox" />
                                <span class="lever"></span>
                                Show Favorite Notes
                            </label>
                        </div>

                        <div className="note  white">
                            <div className="right-align">
                                <i
                                    className="material-icons red-text"
                                    style={{ cursor: "pointer" }}
                                >
                                    favorite
                                </i>
                                <i className="material-icons" style={{ cursor: "pointer" }}>
                                    delete
                                </i>
                            </div>
                            <Link to="">
                                <h5 className="black-text"> AAAA</h5>
                            </Link>
                            <p className="truncate">CCC</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
