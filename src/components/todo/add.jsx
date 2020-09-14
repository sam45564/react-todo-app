import React, { Component } from "react";

class Add extends Component {
    state = {
        todo: { content: '', dueDate: '' },
    }

    handleValueChange = (event) => {
        const todo = { ...this.state.todo };
        todo[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ todo });
    }

    handleSave = () => {
        const validationMessage = this.validateForm();

        if (validationMessage === "") {
            this.props.onAddClick(this.state.todo);

            let todo = { ...this.state.todo };
            todo = { content: '', dueDate: '' };
            this.setState({ todo });
        } else {
            window.alert(validationMessage);
        }
    }

    validateForm = () => {
        const { content, dueDate } = this.state.todo;
        let validationMessage = "";

        if (content === '') {
            validationMessage = "Item description cannot be empty.";
        } else if (dueDate === '') {
            validationMessage = "Due date cannot be empty.";
        }
        return validationMessage;
    }

    render() {
        const { todo } = this.state;

        return (
            <div className="row">
                <div className="col-7">
                    <input name="content" type="text" value={todo.content} className="form-control" placeholder="Enter your todo..." onChange={this.handleValueChange} />
                </div>
                <div className="col-3">
                    <input name="dueDate" type="date" value={todo.dueDate} className="form-control" onChange={this.handleValueChange} />
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={this.handleSave}>Save</button>
                </div>
            </div>
        );
    }
}

export default Add;
