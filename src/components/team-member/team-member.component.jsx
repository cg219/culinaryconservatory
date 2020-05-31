import React from "react";
import styles from "./team-member.style.scss";

class TeamMember extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showBio: false
        }
    }

    toggleBio = event => {
        this.setState((state) => {
            return { showBio: !state.showBio }
        })
    }

    render() {
        return (
            <div className={`${styles.Card} ${styles[this.props.type]} ${this.state.showBio ? styles.ShowBio : ''}`} onClick={this.toggleBio}>
                <div className={styles.ProfileImage}></div>
                <div className={styles.Name}>{this.props.name}</div>
                <div className={styles.Info}>
                    <div className={styles.Skills}>
                        {
                            this.props.skills.map(skill => (
                                <div className={styles.Skill} key={skill.name}>
                                    <div className={styles.SkillName}>{skill.name}:</div>
                                    <div className={styles.SkillList}>
                                    {
                                        skill.list.map((item, index) => <div className={styles.SkillItem} key={index}>{item}</div>)
                                    }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.Bio}>
                    <div className={styles.Title}>Bio:</div>
                    <div className={styles.Copy}>{this.props.bio}</div>
                </div>
            </div>
        )
    }
}

export { TeamMember };
