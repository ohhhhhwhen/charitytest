import React from 'react';

function DeleteBtn(props) {

    return (
        <div className="btn btn-danger" onClick={() => props.onClick(props.id)}>
            Delete
        </div>
    );
}

export default DeleteBtn;
