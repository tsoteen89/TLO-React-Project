import React, { Component } from "react";

import Table from "./Table";

import SkillsList from "./SkillsList";

import tloTestImage from "./assets/ffxivExamplePic.png";
import GenericList from "./GenericList";
import NameDraw from "./NameDraw";

//npm run start
//npm run build

class App extends Component {
    render() {
        var listOfKeyValuePairs = [
            {
                name: "Dr. Pepper",
                description: "Rating of 9",
            },
            {
                name: "Coke",
                description: "Rating of 6",
            },
            {
                name: "Sprite",
                description: "Rating of 7",
            },
            {
                name: "Pepsi",
                description: "Rating of 5",
            },
            {
                name: "Moutain Dew",
                description: "Rating of 7",
            },
        ];

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
                    <div className="col-md-2 offset-md-3 ">
                        <div className="container">
                            <SkillsList />
                        </div>
                    </div>
                    <div className="col-md-2 offset-md-2">
                        <div className="container">
                            <GenericList
                                listTitle="Drinks"
                                listArray={listOfKeyValuePairs}
                            />
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-2 offset-md-7">
                        <div class="container">
                            <NameDraw nameList={listOfKeyValuePairs} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
