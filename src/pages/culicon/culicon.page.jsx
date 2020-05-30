import React from "react";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import { Team } from "./../../components/team/team.component";
import "./culicon.style.scss";

class CuliconPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            loaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true});
        }, 500)
    }

    componentWillUnmount() {
        this.setState({loaded: false});
    }

    render() {
        return (
            <div>
                <section className="feature culicon-feature"></section>
                <section id="culicon" className={`${this.state.loaded ? 'present': ''}`}>
                    <h1>CuliCon Consultants</h1>
                    <h2>Collective</h2>
                    <p>CuliCon, a team of hospitality professionals, proven operators, all accomplished in our varied areas of expertise.</p>
                    <p>Reliable short-term consultants that provide viable long-term results.</p>

                    <h2>Structure</h2>
                    <p>CuliCon provides project advisory services and placement with trusted hospitality consultants. </p>
                    <p>We help determine and outline the scope of work, then recommend consultants either from our team or those we represent, and furnish legal agreements to solidify partnerships.</p>
                    <p>CuliCon remains involved as a dedicated point of contact through the consultancy term serving as an additional layer of expertise, secondary reservoir of knowledge, and lend hands-on support as needed.</p>

                    <h2>Proficiencies</h2>
                    <ul>
                        <li>Restaurant Operations</li>
                        <li>Hospitality &amp; Service Training</li>
                        <li>Health &amp; Hygiene Protocol</li>
                        <li>Human Resources</li>
                        <li>Beverage Programs</li>
                        <li>Kitchen Design</li>
                        <li>Restaurant Finances</li>
                        <li>Openings &amp; Reorganization</li>
                        <li>Culinary Menu Development</li>
                    </ul>

                    <h2>Team</h2>
                    <Team />
                </section>
            </div>
        )
    }
}

export { CuliconPage }
