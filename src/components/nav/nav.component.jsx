import React from "react";
import { Link } from "react-router-dom";
import "./nav.style.scss";

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
            <nav>
                <ul>
                {
                    this.state.links.map(({ name, url}, index) => <li><Link to={url}>{name}</Link></li>)
                }
                </ul>
            </nav>
        )
    }
}

export { Nav };
