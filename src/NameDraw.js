import React, { Component } from "react";

const Section = (props) => {
    return (
        <section>
            <div>Same Name Drawn {props.sameNameCt} times</div>
        </section>
    );
};

class NameDraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomName: this.props.nameList[1].name,
            sameNameCount: 0,
        };
    }

    displayRandomListItem(nameListArray) {
        var originalName = this.state.randomName;
        var newName =
            nameListArray[Math.floor(Math.random() * nameListArray.length)]
                .name;
        this.setState({
            randomName: newName,
        });
        if (originalName == newName) {
            this.state.sameNameCount++;
        } else {
            this.state.sameNameCount = 0;
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.randomName}</h2>
                <button
                    className="btn btn-info"
                    onClick={() =>
                        this.displayRandomListItem(this.props.nameList)
                    }
                >
                    Draw Name
                </button>
                {this.state.sameNameCount ? (
                    <Section sameNameCt={this.state.sameNameCount} />
                ) : null}
            </div>
        );
    }
}

export default NameDraw;
