import React from "react";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import { Team } from "./../../components/team/team.component";
import page from "./../page.style.scss";
import styles from "./culicon.style.scss";

class CuliconPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            data: {
                collective: [
                    "CuliCon, a team of hospitality professionals, proven operators, all accomplished in our varied areas of expertise. Reliable short-term consultants that provide viable long-term results.",
                ],
                structure: [
                    "CuliCon provides project advisory services and placement with trusted, pre-vetted hospitality consultants. Advisory services are two tiered starting with a CuliCon Consultant to determine and outline the scope of work, create the project order and pair the best consultants from our team or network. CuliCon remains involved as a dedicated point of contact through the consultancy as a perpetual resource, and to lend hands-on support as needed.",
                    "Placement services are an extension of our sister Procurement & Placement division. We recommend consultants from our team or network, and furnish legal agreements to solidify partnerships."
                ],
                proficiencies: [
                    "Restaurant Operations",
                    "Hospitality & Service Training",
                    "Culinary Menu Development",
                    "Restaurant Finances",
                    "Beverage Programs",
                    "Human Resources",
                    "Kitchen Design",
                    "Openings & Reorganization",
                    "Health & Hygiene Protocol",
                    "Corporate Food Science & Development"
                ]
            }
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
                <section className={`${page.Feature} ${page.CuliconFeature}`}></section>
                <section id={styles.Culicon} className={`${this.state.loaded ? styles.Present: ''}`}>
                    <h1>CuliCon Consultants</h1>
                    <h2>Collective</h2>
                    { this.state.data.collective.map((copy, index) => <p key={index}>{copy}</p>)}

                    <h2>Structure</h2>
                    { this.state.data.structure.map((copy, index) => <p key={index}>{copy}</p>)}

                    <h2>Proficiencies</h2>
                    <ul>
                        { this.state.data.proficiencies.map((copy, index) => <li key={index}>{copy}</li>)}
                    </ul>

                    <h2>Team</h2>
                    <Team />
                </section>
            </div>
        )
    }
}

export { CuliconPage }
