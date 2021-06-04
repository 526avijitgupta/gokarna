document.addEventListener('DOMContentLoaded', ready, false);

const THEME_PREF_STORAGE_KEY = "theme-preference";
const THEME_TO_ICON_CLASS = {
    'dark': 'fa fa-sun-o',
    'light':'fa fa-moon-o'
};
let toggleIcon = '';
let darkThemeCss = '';

function ready() {
    toggleIcon = document.querySelector('#dark-theme-toggle span');
    darkThemeCss = document.getElementById("dark-theme");

    // TODO: Fetch programatically by user's system preference
    const savedTheme = localStorage.getItem(THEME_PREF_STORAGE_KEY) || 'light';
    setTheme(savedTheme);
    document.getElementById('dark-theme-toggle').addEventListener('click', () => {
        if (toggleIcon.className === THEME_TO_ICON_CLASS.dark) {
            setTheme('light');
        } else if (toggleIcon.className === THEME_TO_ICON_CLASS.light) {
            setTheme('dark');
        }
    });
}

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

function setTheme(themeToSet) {
    localStorage.setItem(THEME_PREF_STORAGE_KEY, themeToSet);
    darkThemeCss.disabled = themeToSet === 'light';
    toggleIcon.className = THEME_TO_ICON_CLASS[themeToSet];
}

