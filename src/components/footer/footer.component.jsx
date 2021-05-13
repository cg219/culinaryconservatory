import React from "react";
import { ContactForm } from "./../contact-form/contact-form.component";
import styles from "./footer.style.scss";

let form = null;

export const Footer = (props) => {
    let form = null;

    if (props.hasForm) {
        form = <ContactForm />
    }

    return (
        <div className={`${styles.Footer} ${!props.hasForm ? styles.NoForm : ''}`}>
            <div className={styles.Socials}>
                <div className={styles.LinkedIn}>
                    <a tabIndex="0" href="https://www.linkedin.com/in/robin-lewis-0134014" target="_blank">LinkedIn</a>
                </div>
                <div className={styles.IG}>
                    <a tabIndex="0" href="https://www.instagram.com/culinaryconservatory" target="_blank">Instagram</a>
                </div>
                <div className={styles.FB}>
                    <a tabIndex="0" href="https://www.facebook.com/gotthejobsgotthepros" target="_blank">Facebook</a>
                </div>
            </div>
            { form }
        </div>
    )
};
