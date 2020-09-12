import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { CC } from "./CC";

ReactDOM.render(
    <BrowserRouter>
        <CC />
    </BrowserRouter>,
    document.getElementById('culinaryconservatory')
);

