document.addEventListener('DOMContentLoaded', ready, false);

const THEME_PREF_STORAGE_KEY = "theme-preference";
const THEME_TO_ICON_CLASS = {
    'dark': 'feather-moon',
    'light':'feather-sun'
};
let toggleIcon = '';
let darkThemeCss = '';

function ready() {
    feather.replace({ 'stroke-width': 1, width: 20, height: 20 });
    darkThemeCss = document.getElementById("dark-theme");

    const savedTheme = localStorage.getItem(THEME_PREF_STORAGE_KEY) || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light');
    setTheme(savedTheme);
    document.getElementById('dark-theme-toggle').addEventListener('click', () => {
        toggleIcon = document.querySelector("#dark-theme-toggle a svg.feather");
        if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.dark) {
            setTheme('light');
        } else if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.light) {
            setTheme('dark');
        }
    });

    document.getElementById('hamburger-menu-toggle').addEventListener('click', () => {
        const hamburgerMenu = document.getElementsByClassName('nav-hamburger-list')[0]
        if (hamburgerMenu.classList.contains('visibility-hidden')) {
            hamburgerMenu.classList.remove('visibility-hidden');
        } else {
            hamburgerMenu.classList.add('visibility-hidden');
        }
    })
}

function setTheme(themeToSet) {
    localStorage.setItem(THEME_PREF_STORAGE_KEY, themeToSet);
    darkThemeCss.disabled = themeToSet === 'light';
    document.querySelector('#dark-theme-toggle a').innerHTML = feather.icons[THEME_TO_ICON_CLASS[themeToSet].split('-')[1]].toSvg();
}

