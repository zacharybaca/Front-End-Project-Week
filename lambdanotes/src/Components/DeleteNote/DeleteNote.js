import React, { Component } from 'react';
import './deleteNote.css';

const DeleteNote = props => {
    let toggle = props.toggle;
    return (
        <div className={toggle ? 'delete-wrapper' : 'hide'}>
            <div>
                <h3 className="delete-button-wrapper">Are you sure you want to delete this?</h3>
            </div>
            <div className="delete-button-wrapper">
                <button className="save-danger" onClick={props.updateParent}>DELETE</button>
                <button className="save-button" onClick={props.updateParent}>NO</button>
            </div>
        </div>
    );
}

export default DeleteNote;