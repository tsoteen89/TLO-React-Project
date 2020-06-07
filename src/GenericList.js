import React, { Component } from "react";

class GenericList extends Component {
    printListItemName(name) {
        console.log("List Item Name: " + name);
    }

    render() {
        var genericListDisplay = this.props.listArray.map((listItem, index) => {
            return (
                <li
                    className="list-group-item"
                    key={index}
                    onClick={() => this.printListItemName(listItem.name)}
                >
                    {listItem.name} - {listItem.description}
                </li>
            );
        });

        return (
            <ul className="list-group">
                <li className="list-group-item font-weight-bold h2">
                    {this.props.listTitle}
                </li>
                {genericListDisplay}
            </ul>
        );
    }
}

export default GenericList;
