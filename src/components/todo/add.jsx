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
        this.props.onAddClick(this.state.todo);

        let todo = { ...this.state.todo };
        todo = { content: '', dueDate: '' };
        this.setState({ todo });
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
