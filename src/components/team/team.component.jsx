import React from "react";
import { TeamMember } from "./../team-member/team-member.component";
import "./team.style.scss";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members: [{
                id: "1",
                name: "Robin Lewis",
                type: "main",
                bio: `Robin brings 20+ years of hands on operational experience with a full career working in key positions of learning. A tenure with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his New York career with the opening of “Tao”.  After this induction to New York Hospitality life he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his operational expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations. Since 2016, Robin transitioned to the hospitality recruitment field as part of the development team at One Haus Recruiting from startup. Through this time, he found the opportunity to consult on several existing operations and successful openings in major dining markets from Miami to Washington DC & Houston. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                skills: [{
                    name: "Restaurant Operations",
                    list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                }, {
                    name: "Beverage",
                    list: ["Program development: Wine, Cocktail, Spirits, N.A."]
                }, {
                    name: "FOH Training & Education",
                    list: ["Team Building Seminars", "Hospitality", "Technical Service", "Beverage", "Sales"]
                }]
            }, {
                id: "2",
                name: "John Lewis",
                type: "main",
                bio: `Robin brings 20+ years of hands on operational experience with a full career working in key positions of learning. A tenure with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his New York career with the opening of “Tao”.  After this induction to New York Hospitality life he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his operational expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations. Since 2016, Robin transitioned to the hospitality recruitment field as part of the development team at One Haus Recruiting from startup. Through this time, he found the opportunity to consult on several existing operations and successful openings in major dining markets from Miami to Washington DC & Houston. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                skills: [{
                    name: "Restaurant Operations",
                    list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                }, {
                    name: "Beverage",
                    list: ["Program development: Wine, Cocktail, Spirits, N.A."]
                }, {
                    name: "FOH Training & Education",
                    list: ["Team Building Seminars", "Hospitality", "Technical Service", "Beverage", "Sales"]
                }]
            }, {
                id: "3",
                name: "Lewis Lewis",
                type: "sub",
                bio: `Robin brings 20+ years of hands on operational experience with a full career working in key positions of learning. A tenure with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his New York career with the opening of “Tao”.  After this induction to New York Hospitality life he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his operational expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations. Since 2016, Robin transitioned to the hospitality recruitment field as part of the development team at One Haus Recruiting from startup. Through this time, he found the opportunity to consult on several existing operations and successful openings in major dining markets from Miami to Washington DC & Houston. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                skills: [{
                    name: "Restaurant Operations",
                    list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                }, {
                    name: "Beverage",
                    list: ["Program development: Wine, Cocktail, Spirits, N.A."]
                }, {
                    name: "FOH Training & Education",
                    list: ["Team Building Seminars", "Hospitality", "Technical Service", "Beverage", "Sales"]
                }]
            }, {
                id: "4",
                name: "Lewis Robin",
                type: "sub",
                bio: `Robin brings 20+ years of hands on operational experience with a full career working in key positions of learning. A tenure with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his New York career with the opening of “Tao”.  After this induction to New York Hospitality life he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his operational expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations. Since 2016, Robin transitioned to the hospitality recruitment field as part of the development team at One Haus Recruiting from startup. Through this time, he found the opportunity to consult on several existing operations and successful openings in major dining markets from Miami to Washington DC & Houston. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                skills: [{
                    name: "Restaurant Operations",
                    list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                }, {
                    name: "Beverage",
                    list: ["Program development: Wine, Cocktail, Spirits, N.A."]
                }, {
                    name: "FOH Training & Education",
                    list: ["Team Building Seminars", "Hospitality", "Technical Service", "Beverage", "Sales"]
                }]
            }, {
                id: "5",
                name: "Some Guy",
                type: "sub",
                bio: `Robin brings 20+ years of hands on operational experience with a full career working in key positions of learning. A tenure with iconic chefs & restaurant groups in New York, Washington D.C., Miami, Tokyo and Dubai.  Robin started his New York career with the opening of “Tao”.  After this induction to New York Hospitality life he went on to hold positions of Bar Manager for Jean-Georges Vongerichten’s “Vong”, Service & Banquet Manager at Geoffrey Zakarian’s “Country”, Sommelier at both “A.D.N.Y.” and “Adore” by Alain Ducasse, and Service Director at Mario Batali’s "Del Posto". Robin then honed his operational expertise with multi-award winning "Junoon Restaurants" opening and operating both the NYC and Dubai locations as their Director of Operations. Since 2016, Robin transitioned to the hospitality recruitment field as part of the development team at One Haus Recruiting from startup. Through this time, he found the opportunity to consult on several existing operations and successful openings in major dining markets from Miami to Washington DC & Houston. Most notably, working with the lauded Atlas Restaurant Group as a Hospitality & Technical Service consultant. All setting the stage for the launch of the Culinary Conservatory.`,
                skills: [{
                    name: "Restaurant Operations",
                    list: ["Operational Fine Tuning", "Administrative Organization", "Inventory Control"]
                }, {
                    name: "Company Handbooks & Manuals",
                    list: ["Policy & Protocol", "Technical Service", "Beverage Education"]
                }, {
                    name: "Beverage",
                    list: ["Program development: Wine, Cocktail, Spirits, N.A."]
                }, {
                    name: "FOH Training & Education",
                    list: ["Team Building Seminars", "Hospitality", "Technical Service", "Beverage", "Sales"]
                }]
            }]
        }
    }

    render() {
        return (
            <div className="team">
            {
                this.state.members.map(({ id, name, bio, skills, type }, index) => <TeamMember key={index} bio={bio} name={name} skills={skills} type={type} />)
            }
            </div>
        )
    }
}


export { Team };
