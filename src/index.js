import "./index.scss";

$('a[href^="#"]').on('click', event => {
    event.preventDefault();

    let link = $(event.currentTarget);
    let section = $(link.attr('href'));

    $('html, body').animate({
        scrollTop: section.offset().top
    }, 900);
});
