$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".header").addClass("small");
        $(".header-nav").addClass("small");
    } else {
        $(".header").removeClass("small");
        $(".header-nav").removeClass("small");
    }
});