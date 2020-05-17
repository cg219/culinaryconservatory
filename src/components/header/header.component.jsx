import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

export const Header = (props) => (
    <div className="header">
        <div className="logo">
            <Link to="/" />
        </div>
    </div>
);
