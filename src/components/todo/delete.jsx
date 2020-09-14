import React from "react";

const Delete = ({ item, onClickEvent }) => {
    return (
        <button type="button" onClick={() => onClickEvent(item)} className="btn btn-sm btn-danger">Done</button>
    );
}

export default Delete;