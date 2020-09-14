import React, { Component } from "react";
import Navbar from "./common/navbar";
import Dashboard from "./dashboard";

class App extends Component {
    state = {
        todo: []
    };

    handleAddTodo = (todoItem) => {
        const { todo: todoList } = this.state;
        const todo = [...todoList];
        todoItem['id'] = todoList.length + 1;
        todo.push(todoItem);
        this.setState({ todo });
    }

    handleDeleteTodo = (todoItem) => {
        const { todo: todoList } = this.state;
        const todo = [...todoList];
        const updateTodoList = todo.filter(t => t.id !== todoItem.id);
        this.setState({ todo: updateTodoList });
    }

    render() {
        return (
            <div>
                <Navbar />
                <Dashboard data={this.state.todo} onAdd={this.handleAddTodo} onDelete={this.handleDeleteTodo} />
            </div>
        );
    }
}

export default App;