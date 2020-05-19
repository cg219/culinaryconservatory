import React from "react";
import { ContactForm } from "./../contact-form/contact-form.component";
import "./footer.style.scss";

// Name entry.2127806314
// Email entry.399317233
// Body entry.10262297
// State entry.1155721484
// https://docs.google.com/forms/d/e/1FAIpQLScYJSQomGuAgxgcmCU1kWyNv0Z1pD1JfFFjp8dd5jfqCXIk3A/formResponse

export const Footer = (props) => (
    <div className="footer">
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
        <ContactForm />
    </div>
);
