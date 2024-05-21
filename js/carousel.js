$('#beneficiosCarousel .carousel-item').each(function () {
    var minPerSlide = 2;
    var next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();

        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$('#parceirosCarousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();

        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});