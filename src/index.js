$('a[href^="#"]').on('click', event => {
    event.preventDefault();

    let link = $(event.currentTarget);
    let section = $(link.attr('href'));

    $('html, body').animate({
        scrollTop: section.offset().top
    }, 900);
});

const onCardClick = event => {
    $(event.currentTarget).toggleClass('showbio');
}

$('.card').on('click', onCardClick);
