import React, { Component } from "react";

class GenericList extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold h2">
                    {this.props.listTitle}
                </li>
                {this.props.listArray.map(function (skill, index) {
                    return (
                        <li className="list-group-item" key={index}>
                            {skill.name} - {skill.description}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default GenericList;
