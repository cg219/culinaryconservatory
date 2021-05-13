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
                    "<p>CuliCon, a team of hospitality professionals, proven operators, all accomplished in our varied areas of expertise.<br/>Reliable short-term consultants that provide viable long-term results.</p>",
                ],
                structure: [
                    "CuliCon provides project advisory services and placement with trusted, pre-vetted hospitality consultants.",
                    "<p>Tiered advisory services begin with a CuliCon Consultant to asses and outline the scope of work, develop the project<br/>order and pair the best consultants from our team. CuliCon remains involved as a dedicated point of contact through<br/>the consultancy as a perpetual resource, and to lend hands-on support as needed.</p>",
                    "Placement services recommend consultants from our team or network, and furnish legal agreements to solidify partnerships with limited involvement throughout the consultancy."
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
            },
            team: {
                main: [{
                    id: "1",
                    name: "Robin Lewis-Director",
                    type: "Main",
                    bio: `A full career of hands on operational experience working in key positions of learning with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his career on the floor working the Hampton— Miami seasonal circuit, he was brought to New York City in 2000 for the opening of “Tao”.  After this induction to NYC Hospitality life, he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations.
                    <br /><br />In 2016, Robin transitioned to the hospitality recruitment field as part of the start-up development team with One Haus Recruiting. Through this time, he found the opportunity to consult on several successful openings in Miami, Houston, and Washington DC. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                    skills: [{
                        name: "FOH Training & Education",
                        list: [["Team Building Seminars:"], ["Hospitality", "Technical Service", "Sales Technique"], ["<br/>"], ["Beverage Education:"], ["Wine", "Cocktail", "Spirits"]]
                    }, {
                        name: "Company Handbooks & Manuals",
                        list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                    }, {
                        name: "Beverage",
                        list: [["Program Development:"], ["Wine", "Cocktail", "Spirits", "Non-Alcoholic"]]
                    }, {
                        name: "Restaurant Operations",
                        list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                    }]
                }, {
                    id: "2",
                    name: "Liran Mezan",
                    type: "Main",
                    bio: `Liran’s career brings a wealth of experience spanning the globe as a Culinary Director of Operations for major restaurant groups and hotels. A career that has fortified his approach to large scale openings, menu modernization, operational fine-tuning, and cultivating aspiring chefs.
                    <br /><br />After graduating from Stony Brook University, Liran quickly traded academia for the culinary world. He progressively rose to Corporate Executive Chef opening 30+ units around the world; NYC, Miami, Washington DC, Atlanta, Chicago, Los Angeles, Las Vegas, Toronto, Hong Kong, London, and the UAE. First, heading up the global expansion and chef training programs for BLT Restaurant Group, and then for The One Group launching brands like STK, Bagatelle Bistro, and Asellina Trattoria. As the Director of Operations of Chefs Club, he perused path in global operations, developing the company’s multiple brands ranging from ✰✰✰Michelin to QSR. The curation and collaboration of and with global Celebrity Chefs for residency programs in NYC, Aspen, and Taiwan. He is now Consulting with focus toward passion projects and primary & secondary dining markets, including his partnership with the Culinary Conservatory.`,
                    skills: [{
                        name: "Corporate",
                        list: [["Company Growth Strategy ", "Brand Expansions"], ["<br/>"], ["Multi-Unit:"], ["Systems Alignment ", "Recipe Standardization ", "Commissary Transition "], ["National Purchasing Strategy ", "Health & Hygiene Guidelines"]]
                    }, {
                        name: "Openings & Reorganization",
                        list: [["Full Scope Openings ", "Culinary Concept Design ", "Kitchen Design"], ["Menu Re-concepting ", "Administrative Organization ", "Evaluations & Restructure"]]
                    }, {
                        name: "Culinary Menu Development",
                        list: [["Menu engineering ", "Recipe Books & Menu Descriptions ", "Seasonal Planning"], ["<br/>"], ["Creative Development:"], ["French ", "American ", "Mediterranean ", "Steakhouse"]]
                    }, {
                        name: "Training",
                        list: [["BOH Management ", "Kitchen Guide Books ", "Critical Training Pathways"], ["Line Level Recruitment & Training"]]
                    }]
                }, {
                    id: "3",
                    name: "Suzy Oklin—SHRM-CP, MBA",
                    type: "Main",
                    bio: `Suzy holds her MBA focused in Human Resources from Florida International University, an HR Labor Law certification from Loyola Marymount University, and is both a member of and a certified SHRM-CP professional. Her career in hospitality is one of diverse experience starting with tenures on the floor up to General Manager and transitioning into a Human Resources Director. 
                    <br /><br />Her passion for HR was born through her early career working with Aoki Restaurant Group in Atlanta & South Florida. These formative years honed her expertise in employee development, training, recruiting, and learning management. Shaping her ideology and best, successful practices toward creating dynamic teams in difficult staffing markets. Suzy then joined Miami’s James Beard awarded Juvia Restaurant Group. As the Corporate Human Resources Director, she led the development of a technology based Corporate HR department that supported a rapid company expansion achieving 5 units of 600+ employees in under 5 years. Suzy’s most recent projects brought her to Los Angeles to work with Lending USA.  Together they re-imagined and developed a fully digitized Human Resources department from scratch.
                    <br /><br />Suzy is continually educating herself to stay at the forefront of new Human Resources trends, legislation, and technology through a variety of Human Resources courses.  She is pursuing a PhD, to become an educator in Human Resources Management subjects. In her spare time, she has participated in a number of mentorships and learning workshops at her alma mater.`,
                    skills: [{
                        name: "HR Generalist & Administrative Modernization",
                        list: [["HR Digitization of Payroll, ATS & HRIS", "Policy & Handbook Development"], ["Audit Leadership", "Hourly Recruitment"]]
                    }, {
                        name: "Human Resources Compliance",
                        list: ["Federal Entities", "CA, NY, IL, FL Labor laws", "Alcohol Awareness Education"]
                    }, {
                        name: "Compensation & Benefits",
                        list: ["Open Enrollment", "Payroll", "Taxes", "ACA", "Retirement"]
                    }, {
                        name: "Learning Management",
                        list: ["LMS Implementation", "Progressive Training", "Required Training", "OSHA"]
                    }]
                }, {
                    id: "4",
                    name: "Nish Patel",
                    type: "Main",
                    bio: `Nish earned his Master’s in accounting early on while working in London, he then joined Paperchase India and was quickly earmarked to lead their US expansion in 2010.  Now he is the Managing Partner of Paperchase North America and is the brainchild behind one of the first  successful Corporate Food Delivery operations in NYC.
                    <br /><br />Paperchase is a hospitality bookkeeping firm that represents QSR to Michelin operations worldwide, their niche expertise, producing analytical reporting, and outsourcing of day-to-day finance operations. Today they have over 500 restaurants in the US alone and continue to grow with offices in NYC, Miami & London. The spectrum of concepts they represent extend from groups like ZUMA, Dinex by Daniel Boulud, and The Fat Duck to Pincho and Five Guys.
                    <br /><br />Nish and Paperchase have partnered with the Culinary Conservatory to offer a quick and effective resource to financial SOP implementation for operations of all sizes and revenue streams.`,
                    skills: [{
                        name: "Restaurant Finances",
                        list: [["Bookkeeping", "Cashflow & Reconciliations", "Financial Digitization"], ["Weekly Reports", "Forecasts & Budgeting", "GL & Journal Maintenance"], ["Inventory Control", "Third Party Financial Services & Set up"]]
                    }]
                }, {
                    id: "5",
                    name: "Gregg Nelson",
                    type: "Main",
                    bio: `A graduate of Cornell University’s School of Hotel & Restaurant Administration and a former Officer in the US Marine Corps; Gregg holds an impressive background as an industry professional with experience in several major dining markets and luxury destinations of NYC, Washington DC, San Francisco, Seattle, and Colorado.
                    <br /><br />Gregg’s career took off as a task force manager for Drew Nieporent’s Myriad Restaurant Group, with the scope of launching F&B programs in “W” and “Interstate” Hotels’ properties around the country. Once settled in NYC, he continued at Robert DeNiro’s “Tribeca Grill” & “Layla”. Eventually making the transition to ✰✰✰Michelin Eleven Madison Park, as a service professional.
                    <br /><br />Progressed to restaurateur status, Gregg and partners, transformed a NYC jazz club into the NYT’s lauded, East Village favorite, “The Redhead”. The foundation to his successful company that offered consultancy services for new restaurant openings and culinary brand extensions into the retail sector. His recent work has been in the D.C. market working with several hospitality groups; Jamie Leed’s, JL Restaurant Group, and during the start-up phases with KNEAD Hospitality & Design with James Beard Chef Edward Lee, as well as with FoodShed Hospitality by James Beard Chef Spike Gjerde.  He is now transitioning into hospitality consulting and Procurement & Placements with the Culinary Conservatory.`,
                    skills: [{
                        name: "Restaurant Operations",
                        list: [["Openings", "Budgeting", "P&L Management", "Cash Flow Management"], ["Inventory Control", "Reservations & Occupancy Optimization"]]
                    }, {
                        name: "Company Handbooks & Manuals",
                        list: ["Policy & Protocol", "Steps of Service", "Front Door/Reservations"]
                    }, {
                        name: "FOH Training & Education",
                        list: [["Staff Appraisals & Development", "Management Development"], ["Hospitality", "Technical Service", "Sales Techniques"]]
                    }]
                }, {
                    id: "7",
                    name: "Ethan Kelley",
                    type: "Main",
                    bio: `Ethan started his career in Spirits with an exhaustive journey fortifying his expertise through extensive travel to distilleries, cooperages, copper smiths around the world.  His formative career started behind the bar both on “the stick” and as a Bar Manager in the North East. He propelled to a being a regarded industry resource in 2004 when he partnered with Flavien Desoblin to develop and oversee the beverage program at the Brandy Library, the globally renowned spirits cellar and drinking lounge in Tribeca NYC.  After achieving numerous global awards for selection, breadth of knowledge, and staff excellence, Ethan went on to consult on a variety of venues from high volume establishments to exclusive connoisseur club lounges around the country.
                    <br /><br />Since his induction to the importer and supplier sector, he has become a well-regarded resource for new producers and distribution teams. He has been a judge for both the NY Spirits Awards Competition and Paul Pacult’s Ultimate Spirits Challenge; featured as an industry expert on The History Channel, MSNBC, FOX News and multiple appearances in the NY Times. Ethan is the Membership Director and Curator for the Spirits Network where he also writes his Blogs for curious enthusiasts.  You will also find him debating all matter of boozy banter with Flavien Desoblin on their podcast, “Make Mine neat”.`,
                    skills: [{
                        name: "Bar & Lounge, Openings & Operations",
                        list: [["Bar Design", "Concept Development", "Bar Efficiencies"], ["Cellar Procurement", "Vendor Partnerships", "Inventory Systems", "Beverage COGS"]]
                    }, {
                        name: "Creative Program Development",
                        list: [["Whiskey Program", "Drink Menu", "Specialty Cocktails"], ["Spirits Program Depth or Breadth", "Non-Alcoholic"]]
                    }, {
                        name: "Training & Education",
                        list: [["Classic Bartending Technique", "Pre & Post Prohibition Cocktails"], ["Spirits History & Provenance", "Salesmanship & Guest Interaction"]]
                    }, {
                        name: "Alcohol Awareness, Safety & Compliance",
                        list: ["Guest Safety", "Alcohol Service Responsibilities"]
                    }]
                }],
                network: [{
                    id: "6",
                    name: "Culinary Specialist",
                    type: "Sub",
                    bio: `A full career developing and working in renowned kitchens. With the bulk of their time in NYC and Miami, working alongside notable luminaries including Tom Colicchio, Stephen Starr, Scott Conant, Michael White and Mario Batali, developing a strong repertoire In European and New American cuisines.
                    <br /><br />Recognized by Michelin with both stars and bib gourmands as well as ✰✰✰ reviews from such publications as the New York Times and Miami Herald.  Developed multiple concepts from ideation to daily operation and excels at both the creative and technical aspects of creating and operating a professional kitchen. Passions and strengths are in developing a strong team built around a teaching disciplined culture.
                    <br /><br />Since 2018 has consulted on several projects, notably with SBE and Chef Michael Schwartz’s Genuine Food Group in Miami.`,
                    skills: [{
                        name: "Kitchen Operations",
                        list: [["BOH Operations & SOP", "Team Workflow Organization", "Inventory Control"], ["QSR Openings & Concept Development", "Line Level Training"]]
                    }, {
                        name: "Menu Ideation",
                        list: [["Menu Engineering", "Sales Analysis", "Market Testing", "Recipe R&D"], ["Recipe Costing & Documentation", "Product Sourcing", "Purchasing Strategy"], ["<br />"], ["Creative Development:"], ["Italian", "Mediterranean", "Latin"]]
                    }, {
                        name: "Kitchen Design",
                        list: ["Equipment Review/Assessment", "Cap-Ex Improvement", "Workflow Optimization"]
                    }]
                }]
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
                    { this.state.data.collective.map((copy, index) => <p key={index} dangerouslySetInnerHTML={{__html: copy}}></p>)}

                    <h2>Structure</h2>
                    { this.state.data.structure.map((copy, index) => <p key={index} dangerouslySetInnerHTML={{__html: copy}}></p>)}

                    <h2>Proficiencies</h2>
                    <ul>
                        { this.state.data.proficiencies.map((copy, index) => <li key={index}>{copy}</li>)}
                    </ul>

                    <h2>Team</h2>
                    <Team members={this.state.team.main} />
                    <h2>Network</h2>
                    <Team members={this.state.team.network} />
                </section>
            </div>
        )
    }
}

export { CuliconPage }
