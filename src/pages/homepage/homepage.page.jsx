import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./../../components/header/header.component";
import { Footer } from "./../../components/footer/footer.component";
import "./homepage.style.scss";

export const Homepage = () => (
    <div>
        <div className="enter">
            <div className="culicon">
                <div className="background-image" />
                <Link to="culicon" />
                <span>Culicon Consultants</span>
            </div>
            <div className="procurement">
                <div className="background-image" />
                <Link to="procurement" />
                <span>Procurement &amp; Placements</span>
            </div>
        </div>
    </div>
);
