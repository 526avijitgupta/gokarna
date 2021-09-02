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
    setThemeByUserPref();

    // Elements to inject
    const svgsToInject = document.querySelectorAll('img.svg-inject');
    // Do the injection
    SVGInjector(svgsToInject);

    document.getElementById('hamburger-menu-toggle').addEventListener('click', () => {
        const hamburgerMenu = document.getElementsByClassName('nav-hamburger-list')[0]
        if (hamburgerMenu.classList.contains('visibility-hidden')) {
            hamburgerMenu.classList.remove('visibility-hidden');
        } else {
            hamburgerMenu.classList.add('visibility-hidden');
        }
    })
}

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 820) {
        // For smaller screen, show shadow earlier
        toggleHeaderShadow(50);
    } else {
        toggleHeaderShadow(100);
    }
});

function toggleHeaderShadow(scrollY) {
    if (window.scrollY > scrollY) {
        document.querySelectorAll('.header').forEach(function(item) {
            item.classList.add('header-shadow')
        })
    } else {
        document.querySelectorAll('.header').forEach(function(item) {
            item.classList.remove('header-shadow')
        })
    }
}

function setThemeByUserPref() {
    darkThemeCss = document.getElementById("dark-theme");
    const savedTheme = localStorage.getItem(THEME_PREF_STORAGE_KEY) || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light');
    const darkThemeToggles = document.querySelectorAll('.dark-theme-toggle');
    setTheme(savedTheme, darkThemeToggles);
    darkThemeToggles.forEach(el => el.addEventListener('click', (event) => {
        toggleIcon = event.currentTarget.querySelector("a svg.feather");
        if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.dark) {
            setTheme('light', [event.currentTarget]);
        } else if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.light) {
            setTheme('dark', [event.currentTarget]);
        }
    }));
}

function setTheme(themeToSet, targets) {
    localStorage.setItem(THEME_PREF_STORAGE_KEY, themeToSet);
    darkThemeCss.disabled = themeToSet === 'light';
    targets.forEach((target) => {
            target.querySelector('a').innerHTML = feather.icons[THEME_TO_ICON_CLASS[themeToSet].split('-')[1]].toSvg();
    });
}

