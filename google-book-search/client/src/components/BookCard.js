import React, { useState } from "react";

function BookCard({ _id, title, author, description, image, link, location, handleBookDelete, handleBookSave }) {
    const [deleteButtonState, setDeleteButtonState] = useState(false);
    const [saveButtonState, setSaveButtonState] = useState(false);

    const saveHandler = () => {
        setSaveButtonState(true);
        handleBookSave({ title, author, description, image, link });
    }

    const deleteHandler = () => {
        setDeleteButtonState(true);
        handleBookDelete({ _id });
    }

    return (
        <div className='result-card'>
            <div className='row result-header'>
                <div className='col-12 col-sm-5 offset-sm-1'>
                    <h4>{title}</h4>
                    <small>Written By: {
                        author.map(author => `${author} `)
                    }</small>
                </div>
                <span className='col-12 col-sm-5 book-buttons'>
                    <a
                        className="button"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >View</a>

                    {location === "Search" ?
                        <button
                            disabled={saveButtonState ? true : false}
                            onClick={() => saveHandler()}
                            className="button"
                        >Save</button> :
                        <button
                            disabled={deleteButtonState ? true : false}
                            onClick={() => deleteHandler()}
                            className="button"
                        >Delete</button>
                    }
                </span>
            </div>
            <div className='row'>
                <div className='col-4 col-sm-3 justify-content-sm-center'>
                    <img className="rounded mx-auto d-block" src={image} alt={title} />
                </div>
                <div className='col-8 col-sm-9 book-description'>
                    <br></br>
                    <p className='lead'>Description: </p>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default BookCard;