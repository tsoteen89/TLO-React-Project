import React, { Component } from "react";

class SkillsList extends Component {
    render() {
        var listOfSkills = [
            {
                skillName: "HTML",
                yearsOfExperience: "7 Years",
            },
            {
                skillName: "AngularJS",
                yearsOfExperience: "7 Years",
            },
            {
                skillName: "Java",
                yearsOfExperience: "7 Years",
            },
            {
                skillName: "XML",
                yearsOfExperience: "7 Years",
            },
            {
                skillName: "CSS",
                yearsOfExperience: "7 Years",
            },
        ];

        return (
            <ul className="list-group">
                <li className="list-group-item font-weight-bold h2">Skills</li>
                {listOfSkills.map(function (skill, index) {
                    return (
                        <li className="list-group-item" key={index}>
                            {skill.skillName} - {skill.yearsOfExperience}{" "}
                            Experience
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default SkillsList;
