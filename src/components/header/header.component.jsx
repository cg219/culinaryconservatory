import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.style.scss";

export const Header = (props) => (
    <div className={styles.Header}>
        <div className={styles.Logo}>
            <Link tabIndex="0" to="/">Header</Link>
        </div>
    </div>
);
