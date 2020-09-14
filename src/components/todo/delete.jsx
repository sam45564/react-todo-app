import React, { Component } from "react";

class Delete extends Component {

    handleClick = () => {
        const response = window.confirm("Are you sure you want to remove this item? ");
        if (response) {
            const { item, onClickEvent } = this.props;
            onClickEvent(item);
        }
    }

    render() {
        return (
            <button type="button" onClick={this.handleClick} className="btn btn-sm btn-danger">Done</button>
        );
    }
}

export default Delete;