window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelectorAll('.header, .header-nav').forEach(function(item) {
            item.classList.add('small')
        })
    } else {
        document.querySelectorAll('.header, .header-nav').forEach(function(item) {
            item.classList.remove('small')
        })
    }
});
