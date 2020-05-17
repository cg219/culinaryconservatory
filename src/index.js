// $('a[href^="#"]').on('click', event => {
//     event.preventDefault();

//     let link = $(event.currentTarget);
//     let section = $(link.attr('href'));

//     $('html, body').animate({
//         scrollTop: section.offset().top
//     }, 900);
// });

// const onCardClick = event => {
//     $(event.currentTarget).toggleClass('showbio');
// }

// const presentSite = () => {
//     $("body").addClass('present');
// }

// $('.card').on('click', onCardClick);

// setTimeout(presentSite, 1000);

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

