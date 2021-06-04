document.addEventListener('DOMContentLoaded', ready, false);

const THEME_PREF_STORAGE_KEY = "theme-preference";
const GOKARNA_LIGHT_THEME = 'gokarna-light';
const GOKARNA_DARK_THEME = 'gokarna-dark';
let toggleIcon = '';

function ready() {
    toggleIcon = document.querySelector('#dark-theme-toggle span');
    // TODO: Fetch programatically by user's system preference
    const savedTheme = localStorage.getItem(THEME_PREF_STORAGE_KEY) || GOKARNA_LIGHT_THEME;
    setTheme(savedTheme);
    document.getElementById('dark-theme-toggle').addEventListener('click', () => {
        if (toggleIcon.className === "fa fa-moon-o") {
            setTheme(GOKARNA_DARK_THEME);
        } else if (toggleIcon.className === "fa fa-sun-o") {
            setTheme(GOKARNA_LIGHT_THEME);
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

    const darkThemeCss = document.getElementById("dark-theme");
    localStorage.setItem(THEME_PREF_STORAGE_KEY, themeToSet);
    if (themeToSet === GOKARNA_DARK_THEME) {
        darkThemeCss.disabled = false;
        toggleIcon.className = "fa fa-sun-o";
    } else if(themeToSet === GOKARNA_LIGHT_THEME) {
        darkThemeCss.disabled = true;
        toggleIcon.className = "fa fa-moon-o";
    }
}

