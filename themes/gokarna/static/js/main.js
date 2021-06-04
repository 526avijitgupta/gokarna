window.onload = () => {
    const GOKARNA_LIGHT_THEME = 'gokarna-light';
    const GOKARNA_DARK_THEME = 'gokarna-dark';
    const themeClassSwitcherMap = {
        [GOKARNA_LIGHT_THEME]: GOKARNA_DARK_THEME,
        [GOKARNA_DARK_THEME]: GOKARNA_LIGHT_THEME
    };

    document.getElementById('dark-light-theme-toggle').addEventListener('click', () => {
        const currentTheme = document.querySelector('html').classList[0];
        const themeToSwitchTo = themeClassSwitcherMap[currentTheme];
        document.querySelectorAll(`.${currentTheme}`).forEach((element) => {
            element.classList.add(themeToSwitchTo);
            element.classList.remove(currentTheme);
        });
    });

    window.addEventListener('scroll', () => {
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
}
