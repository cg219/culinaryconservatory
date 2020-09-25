import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import styles from "./homepage.style.scss";

export const Homepage = () => (
    <div>
        <div className={styles.Enter}>
            <div className={styles.Procurement}>
                <div className={styles.Image} />
                <Link to="procurement" />
                <span>Procurement &amp; Placements</span>
            </div>
            <div className={styles.Culicon}>
                <div className={styles.Image} />
                <Link to="culicon" />
                <span>Culicon Consultants</span>
            </div>
        </div>
    </div>
);
