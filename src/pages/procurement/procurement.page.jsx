import React from "react";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import page from "./../page.style.scss";
import styles from "./procurement.style.scss";


class ProcurementPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            loaded: false,
            data: {
                collective: [
                    "Culinary Professionals turned Head Hunters, a group of tenured operators whose<br/>passions extend across the broad spectrum that is Hospitality.",
                    "Our value is realized through the meaningful partnerships secured for those we represent."
                ],
                procurement: [
                    "<p>A proven record of established, viable partnerships; unit level, corporate and executive searches,<br/>we are here when you need us for the most crucial moments of hiring procurement.</p>",
                    "Organizations expanding rapidly, or with multiple units and needs.",
                    "Confidential searches for under the radar openings and replacements.",
                    "Fire drill needs when a position is most urgent to fill.",
                    "<p>A layered strategy of relentless networking, direct outreach, social media presence,<br/>and traditional job board sourcing. Thorough vetting ensures qualifications for specified title and scope,<br/>supported by prompt employment verification, with personal, industry, and professional reference checks.</p>"
                ],
                placement: [
                    "Everything we do is under the veil of confidentiality, we represent our candidates just as we do our clients.",
                    "Head Hunters, guides, specialists, negotiators, representatives; all describe our daily workflow.",
                    "<p>Extensive databases and boundless organized collaboration ensure each candidate is represented by and to,<br/>those that align with their interests, qualifications and identity.</p>"
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
                <section className={`${page.Feature} ${page.ProcurementFeature}`}></section>
                <section id={styles.Procurement} className={`${this.state.loaded ? styles.Present: ''}`}>
                    <h1>Procurement &amp; Placements</h1>
                    <h2>Collective</h2>
                    { this.state.data.collective.map((copy, index) => <p key={index} dangerouslySetInnerHTML={{__html: copy}}></p>)}

                    <h2>Procurement</h2>
                    { this.state.data.procurement.map((copy, index) => <p key={index} dangerouslySetInnerHTML={{__html: copy}}></p>)}

                    <h2>Placement</h2>
                    { this.state.data.placement.map((copy, index) => <p key={index} dangerouslySetInnerHTML={{__html: copy}}></p>)}
                </section>
            </div>
        )
    }
}

export { ProcurementPage}
