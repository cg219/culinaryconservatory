import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import "./homepage.style.scss";

export const Homepage = () => (
    <div>
        <div className="enter">
            <div className="procurement">
                <Link to="procurement" />
                <span>Procurement</span>
            </div>
            <div className="culicon">
                <Link to="culicon" />
                <span>Culicon</span>
            </div>
        </div>
    </div>
);
