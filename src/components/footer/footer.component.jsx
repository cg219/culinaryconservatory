import React from "react";
import { ContactForm } from "./../contact-form/contact-form.component";
import "./footer.style.scss";

let form = null;



export const Footer = (props) => {
    let form = null;

    if (props.hasForm) {
        form = <ContactForm />
    }

    return (
        <div className={`footer ${props.hasForm ? 'with-form' : 'no-form'}`}>
            <div className="socials">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/robin-lewis-0134014" target="_blank"></a>
                </div>
                <div className="ig">
                    <a href="https://www.instagram.com/culinaryconservatory" target="_blank"></a>
                </div>
                <div className="fb">
                    <a href="https://www.facebook.com/gotthejobsgotthepros" target="_blank"></a>
                </div>
            </div>
            { form }
        </div>
    )
};
