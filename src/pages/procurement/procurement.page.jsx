import React from "react";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import "./procurement.style.scss";


class ProcurementPage extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({loaded: true});
    }

    componentWillUnmount() {
        this.setState({loaded: false});
    }

    render() {
        return (
            <div>
                <section className="feature"></section>
                <section id="procurement" className={`${this.state.loaded ? 'present': ''}`}>
                    <h1>Procurement &amp; Placements</h1>
                    <h2>Collective</h2>
                    <p>Culinary Professionals turned Head Hunters, a group of tenured operators whose passions extend across the broad spectrum that is Hospitality.</p>
                    <p>Our value is realized through the meaningful partnerships secured for those we represent.</p>

                    <h2>Procurement</h2>
                    <p>A proven record of established, viable partnerships; unit level, corporate and executive searches, we are here when you need us for the most crucial moments of hiring procurement.</p>
                    <p>Organizations expanding rapidly, or with multiple units and needs.</p>
                    <p>Confidential searches for under the radar openings and replacements.</p>
                    <p>Fire drill needs when a position is most urgent to fill.</p>
                    <p>A layered strategy of relentless networking, direct outreach, social media presence, and traditional job board sourcing. Thorough vetting ensures qualifications for specified title and scope, supported by prompt employment verification, with personal, industry, and professional reference checks.</p>

                    <h2>Placement</h2>
                    <p>Everything we do is under the veil of confidentiality, we represent our candidates just as we do our clients.</p>
                    <p>Head Hunters, guides, specialists, negotiators, representatives; all describe our daily workflow.</p>
                    <p>Extensive databases and boundless organized collaboration ensure each candidate is represented by and to, those that align with their interests, qualifications and identity.</p>
                </section>
            </div>
        )
    }
}

export { ProcurementPage}
