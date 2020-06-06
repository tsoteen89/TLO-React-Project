import React, { Component } from "react";

import Table from "./Table";

import SkillsList from "./SkillsList";

import tloTestImage from "./assets/ffxivExamplePic.png";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="container p-3 my-3 bg-dark text-white">
                            <h1>Travis React Project</h1>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 offset-md-2">
                        <SkillsList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
