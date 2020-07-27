import React, { Component } from "react";
import styles from "./team-member.style.scss";

class TeamMember extends Component {
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

    showBio = event => {
        let isMobile = window.innerWidth < 600;

        if (!isMobile) {
            this.setState({ showBio: true})
        }
    }

    hideBio = event => {
        let isMobile = window.innerWidth < 600;

        if (!isMobile) {
            this.setState({ showBio: false})
        }
    }

    render() {
        const skillLists = (skill) => {
            if (Array.isArray(skill.list[0])) {
                return skill.list.map((item, index) => (
                    <div className={styles.SkillList} key={index}>
                        {
                            item.map((currentItem, currentIndex) => <div className={styles.SkillItem} key={currentIndex} dangerouslySetInnerHTML={{__html: currentItem}}></div>)
                        }
                    </div>
                ))
            } else {
                return (
                    <div className={styles.SkillList}>
                        {
                             skill.list.map((item, index) => <div className={styles.SkillItem} key={index} dangerouslySetInnerHTML={{__html: item}}></div>)
                        }
                    </div>
                )
            }
        }

        return (
            <div data-id={this.props.dataId} className={`${styles.Card} ${styles[this.props.type]} ${this.state.showBio ? styles.ShowBio : ''}`} onClick={this.toggleBio} onMouseOver={this.showBio} onMouseOut={this.hideBio}>
                <div className={styles.ProfileImage}></div>
                <div className={styles.Name}>{this.props.name}</div>
                <div className={styles.Info}>
                    <div className={styles.Skills}>
                        {
                            this.props.skills.map(skill => (
                                <div className={styles.Skill} key={skill.name}>
                                    <div className={styles.SkillName}>{skill.name}:</div>
                                    { skillLists(skill) }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.Bio}>
                    <div className={styles.Title}>Bio:</div>
                    <div className={styles.Copy} dangerouslySetInnerHTML={{__html: this.props.bio}}></div>
                </div>
            </div>
        )
    }
}

export { TeamMember };
