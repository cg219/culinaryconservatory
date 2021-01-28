import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.style.scss";

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [{
                name: "Procurement & Placements",
                url: "procurement"
            }, {
                name: "Culicon Consultants",
                url: "culicon"
            }]
        }
    }

    render() {
        return (
            <nav className={styles.Nav}>
                <ul>
                {
                    this.state.links.map(({ name, url}, index) => <li key={name}><NavLink tabIndex="0" activeClassName={styles.Active} to={url}>{name}</NavLink></li>)
                }
                </ul>
            </nav>
        )
    }
}

export { Nav };
