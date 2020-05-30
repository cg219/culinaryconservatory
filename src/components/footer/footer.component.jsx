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
                    <a href="https://www.linkedin.com/in/robin-lewis-0134014" target="_blank"></a>
                </div>
                <div className={styles.IG}>
                    <a href="https://www.instagram.com/culinaryconservatory" target="_blank"></a>
                </div>
                <div className={styles.FB}>
                    <a href="https://www.facebook.com/gotthejobsgotthepros" target="_blank"></a>
                </div>
            </div>
            { form }
        </div>
    )
};
