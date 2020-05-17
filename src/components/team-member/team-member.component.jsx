import React from "react";
import "./team-member.style.scss";

class TeamMember extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showBio: false
        }
    }

    toggleBio = (event) => {
        this.setState((state) => {
            return { showBio: !state.showBio }
        })
    }

    render() {
        return (
            <div className={`card ${this.props.type} ${this.state.showBio ? 'showbio' : ''}`} onClick={this.toggleBio}>
                <div className="profile-image"></div>
                <div className="name">{this.props.name}</div>
                <div className="info">
                    <div className="skills">
                        {
                            this.props.skills.map(skill => (
                                <div className="skill">
                                    <div className="skill-name">{skill.name}:</div>
                                    <div className="skill-list">
                                    {
                                        skill.list.map(item => <div className="skill-item">{item}</div>)
                                    }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="bio">
                    <div className="title">Bio:</div>
                    <div className="copy">{this.props.bio}</div>
                </div>
            </div>
        )
    }
}

export { TeamMember };
