import React from "react";
import { TeamMember } from "./../team-member/team-member.component";
import styles from "./team.style.scss";

export const Team = props => {
    return (
        <div className={styles.Team}>
        {
            props.members.map(({ id, name, bio, skills, type }, index) => <TeamMember key={index} bio={bio} name={name} skills={skills} type={type} dataId={id} />)
        }
        </div>
    )
}
