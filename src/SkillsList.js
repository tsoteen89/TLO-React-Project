import React, { Component } from "react";

class SkillsList extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold h2">Skills</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">AngularJS</li>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">XML</li>
                <li className="list-group-item">CSS</li>
            </ul>
        );
    }
}

export default SkillsList;
