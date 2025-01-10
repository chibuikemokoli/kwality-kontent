/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

gsap.from('.home__image, .ngg, .button', { opacity: 0, duration: 2, delay: 1.3, x: 60 })
gsap.from('.hero-content, .ngh', { opacity: 0, duration: 2, delay: .8, y: 25 })
gsap.from('.hero-text, .wrapper, .social-list, .logos, .ngb', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav__logo, .nav__toggle, .nlg', { opacity: 0, duration: .6, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav__link', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })

const mixer = mixitup('.blog-list', {
    selectors: {
        target: '.blog-card'
    },
    animation: {
        duration: 400
    }
});

const linkBlog = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
    if (linkBlog) {
        linkBlog.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkBlog.forEach(l => l.addEventListener('click', activePortfolio))


