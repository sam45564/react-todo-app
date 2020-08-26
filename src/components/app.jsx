import React, { Component } from "react";
import Navbar from "./common/navbar";
import Dashboard from "./dashboard";

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <Navbar />
                <Dashboard />
            </div>
        );
    }
}

export default App;