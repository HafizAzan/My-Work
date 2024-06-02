import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../config/fireBase';
import CustomSpinner from './customSpinner';

function CreateNotes({ getNote = () => { } }) {
    const [isvalue, setValue] = useState(null);
    const [loader, setLoader] = useState(false);
    const InputFieldsController = (event) => {
        event.preventDefault();
        const curentElement = event.target;
        setValue({
            ...isvalue,
            [curentElement.name]: curentElement.value,
        })
    }

    const addNoteHandler = async (event) => {
        event.preventDefault();
        setLoader(true)
        if (!isvalue.title || !isvalue.content) {
            alert("Plzz Enter Your Input.")
            return
        }

        const payload = {
            ...isvalue,
            favorite: false,
        }

        try {
            await addDoc(collection(db, "notes"), payload)
            getNote();
            setValue({
                title: "",
                content: ""
            })
        } catch (error) {
            console.error(error);
        }
        setLoader(false)
    }

    return (
        <div className="col s7">
            <div className="section form-container">
                <CustomSpinner loading={loader} />
                <form className="white" onSubmit={addNoteHandler}>
                    <h5 className="grey-text text-darken-3">Create Note</h5>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="note_title"
                                type="text"
                                className="validate"
                                name="title"
                                onChange={InputFieldsController}
                                value={isvalue?.title}
                            />
                            <label className="active">Title</label>
                        </div>
                    </div>

                    <div className="input-field col s12">
                        <textarea
                            id="note_content"
                            className="materialize-textarea"
                            name="content"
                            onChange={InputFieldsController}
                            value={isvalue?.content}
                        ></textarea>
                        <label>Content</label>
                    </div>
                    <button className="btn green" type="submit">
                        Create Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateNotes
