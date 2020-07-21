import React from "react";
import { TeamMember } from "./../team-member/team-member.component";
import styles from "./team.style.scss";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members: [{
                id: "1",
                name: "Robin Lewis",
                type: "Main",
                bio: `A full career of hands on operational experience working in key positions of learning with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his career on the floor working the Hampton— Miami seasonal circuit, he was brought to New York City in 2000 for the opening of “Tao”.  After this induction to NYC Hospitality life, he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations. In 2016, Robin transitioned to the hospitality recruitment field as part of the start-up development team with One Haus Recruiting. Through this time, he found the opportunity to consult on several successful openings in Miami, Houston, and Washington DC. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                skills: [{
                    name: "FOH Training & Education",
                    list: ["Team Building Seminars: Hospitality, Technical Service & Sales Technique", "Beverage Education: Wine, Cocktail, Spirits"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                }, {
                    name: "Beverage",
                    list: ["Program development: Wine, Cocktail, Spirits, N.A."]
                }, {
                    name: "Restaurant Operations",
                    list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                }]
            }, {
                id: "2",
                name: "Liran Mezan",
                type: "Main",
                bio: `Liran’s career brings a wealth of experience spanning the globe as a Culinary Director of Operations for major restaurant groups and hotels. A career that has fortified his approach to large scale openings, menu modernization, operational fine-tuning, and cultivating aspiring chefs. After graduating from Stony Brook University, Liran quickly traded academia for the culinary world. He progressively rose to Corporate Executive Chef opening 30+ units around the world; NYC, Miami, Washington DC, Atlanta, Chicago, Los Angeles, Las Vegas, Toronto, Hong Kong, London, and the UAE. First, heading up the global expansion and chef training programs for BLT Restaurant Group, and then for The One Group launching brands like STK, Bagatelle Bistro, and Asellina Trattoria. As the Director of Operations of Chefs Club, he perused path in global operations, developing the company’s multiple brands ranging from ✰✰✰Michelin to QSR. The curation and collaboration of and with global Celebrity Chefs for residency programs in NYC, Aspen, and Taiwan. He is now Consulting with focus toward passion projects and primary & secondary dining markets, including his partnership with the Culinary Conservatory.`,
                skills: [{
                    name: "Corporate",
                    list: ["Multi-Unit Systems Alignment", "Company Growth Strategy", "Commissary Transition National Purchasing Strategy", "Multi-Unit Recipe Standardization"]
                }, {
                    name: "Openings & Reorganization",
                    list: ["Full Scope Openings", "Culinary Concept Design", "Kitchen Design & Schematics", "Menu Re-concepting", "Administrative Organization", "Team Evaluations & Restructure"]
                }, {
                    name: "Culinary Menu Development",
                    list: ["Creative Development: French, American, Mediterranean, Steakhouse", "Menu engineering", "Recipe Books & Menu Descriptions", "Seasonal Planning"]
                }, {
                    name: "Training",
                    list: ["BOH Management Training", "Kitchen Guide Books", "Critical Training Pathways", "Line Level Recruitment & Training"]
                }]
            }, {
                id: "3",
                name: "Suzy Oklin",
                type: "Sub",
                bio: `Suzy holds her MBA focused in Human Resources from Florida International University, an HR Labor Law certification from Loyola Marymount University, and is both a member of and a certified SHRM-CP professional. Her career in hospitality is one of diverse experience starting with tenures on the floor up to General Manager and transitioning into a Human Resources Director. Her passion for HR was born through her early career working with Aoki Restaurant Group in Atlanta & South Florida. These formative years honed her expertise in employee development, training, recruiting, and learning management. Shaping her ideology and best, successful practices toward creating dynamic teams in difficult staffing markets. Suzy then joined Miami’s James Beard awarded Juvia Restaurant Group. As the Corporate Human Resources Director, she led the development of a technology based Corporate HR department that supported a rapid company expansion achieving 5 units of 600+ employees in under 5 years. Suzy’s most recent projects brought her to Los Angeles to work with Lending USA. Together they re-imagined and developed a fully digitized Human Resources department from scratch. Suzy is continually educating herself to stay at the forefront of new Human Resources trends, legislation, and technology through a variety of Human Resources courses.  She is pursuing a PhD, to become an educator in Human Resources Management subjects. In her spare time, she has participated in a number of mentorships and learning workshops at her alma mater.`,
                skills: [{
                    name: "Generalist & Administrative Modernization",
                    list: ["HR Digitization of Payroll, ATS & HRIS", "Policy & Handbook Development", "Audit Leadership", "Hourly Recruitment"]
                }, {
                    name: "Human Resources Compliance",
                    list: ["Federal Entities", "CA, NY, IL, FL Labor laws", "Alcohol Awareness Education"]
                }, {
                    name: "Compensation and Benefits",
                    list: ["Open Enrollment", "Payroll", "Taxes", "ACA", "Retirement"]
                }, {
                    name: "Learning Management",
                    list: ["LMS Implementation", "Progressive Training", "Required Training", "OSHA"]
                }]
            }, {
                id: "4",
                name: "Nish Patel",
                type: "Sub",
                bio: `Nish is the Managing partner of Paperchase North America, originally from London, he spearheaded US operations, in 2010. Paperchase is a hospitality bookkeeping firm that represents QSR to Michelin operations worldwide, their niche expertise, producing analytical reporting, and outsourcing day-to-day finance operations. Today they have over 400 restaurants in the US alone and continue to grow with offices in NY and Miami. The spectrum of concepts they represent extend from groups like ZUMA, Cipriani and the Fat Duck to Wasbi and Pincho. Prior to launching Paperchase in the US, Nish worked for a CPA firm in London Makan & Makan Chartered Accountants. After that, he joined Paperchase India operations and was earmarked to lead their US expansion. His philosophy “people are the true assets of companies, not computers, software or other traditional assets”. He and Paperchase have partnered with the Culinary Conservatory with the intent to offer a quick and effective resource to financial SOP implementation for operations of all sizes and revenue streams.`,
                skills: [{
                    name: "Restaurant Finances",
                    list: ["Bookkeeping", "Cashflow & Reconciliations", "Financial Digitization", "Weekly Reports", "Forecasts & Budgeting", "GL & Journal Maintenance", "Inventory Control", "Third Party Financial Services & Set up"]
                }]
            }, {
                id: "5",
                name: "Gregg Nelson",
                type: "Sub",
                bio: `A graduate of Cornell University’s School of Hotel & Restaurant Administration and a former Officer in the US Marine Corps; Gregg holds an impressive background as an industry professional with experience in several major dining markets and luxury destinations of NYC, Washington DC, San Francisco, Seattle, and Colorado. Gregg’s career took off as a task force manager for Drew Nieporent’s Myriad Restaurant Group, with the scope of launching F&B programs in “W” and “Interstate” Hotels’ properties around the country. Once settled in NYC, he continued at Robert DeNiro’s “Tribeca Grill” & “Layla”. Eventually making the transition to ✰✰✰Michelin Eleven Madison Park, as a service professional. Progressed to restaurateur status, Gregg and partners, transformed a NYC jazz club into the NYT’s lauded, East Village favorite, “The Redhead”. The foundation to his successful company that offered consultancy services for new restaurant openings and culinary brand extensions into the retail sector. His recent work has been in the D.C. market working with several hospitality groups; Jamie Leed’s, JL Restaurant Group, and during the start-up phases with KNEAD Hospitality & Design with James Beard Chef Edward Lee, as well as with FoodShed Hospitality by James Beard Chef Spike Gjerde.  He is now transitioning into hospitality consulting and Procurement & Placements with the Culinary Conservatory.`,
                skills: [{
                    name: "Restaurant Operations",
                    list: ["Openings", "Budgeting", "P&L Management", "Cash Flow Management", "Inventory Control", "Reservations & Occupancy Optimization"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Steps of Service", "Front Door/Reservations"]
                }, {
                    name: "FOH Training & Education",
                    list: ["Staff Appraisals & Development", "Management Development", "Hospitality", "Technical Service", "Sales Techniques"]
                }]
            }, {
                id: "6",
                name: "Culinary Specialist",
                type: "Sub",
                bio: `A full career developing and working in renowned kitchens. With the bulk of their time in NYC and Miami, working alongside notable luminaries including Tom Colicchio, Stephen Starr, Scott Conant, Michael White and Mario Batali, developing a strong repertoire In European and New American cuisines. Recognized by Michelin with both stars and bib gourmands as well as ✰✰✰ reviews from such publications as the New York Times and Miami Herald.  Developed multiple concepts from ideation to daily operation and excels at both the creative and technical aspects of creating and operating a professional kitchen. Passions and strengths are in developing a strong team built around a teaching disciplined culture. Since 2018 has consulted on several projects, notably with SBE and Chef Michael Schwartz’s Genuine Food Group in Miami.`,
                skills: [{
                    name: "Kitchen Operations",
                    list: ["BOH Operations & SOP", "Staff Workflow Organization", "Inventory Control"]
                }, {
                    name: "Menu Ideation",
                    list: ["Creative Development", "Sales Analysis", "Market Testing"]
                }, {
                    name: "Recipe Development & Costing",
                    list: ["SRecipe R&D", "Product Sourcing", "Line Level Training"]
                }, {
                    name: "Kitchen Design",
                    list: ["Equipment Review/Assessment", "Cap-Ex Improvement", "Workflow Optimization"]
                }]
            }]
        }
    }

    render() {
        return (
            <div className={styles.Team}>
            {
                this.state.members.map(({ id, name, bio, skills, type }, index) => <TeamMember key={index} bio={bio} name={name} skills={skills} type={type} dataId={id} />)
            }
            </div>
        )
    }
}


export { Team };
