// nav animation

const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');
const scrollOptions = {
    rootMargin: '-90% 0px 0px 0px'
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    })
}, scrollOptions)

observer.observe(hero);

// mobile menu button toggle

const menuButton = document.querySelector('#menu-nav-button')
const navMenu = document.querySelector('.links')

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show-links')
    console.log('clicked')
})

// parallax effect for hero

const parallax = document.getElementById('para')

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .3 + 'px';
})

// slide in animation for menu items

const boxes = document.querySelectorAll('.left, .right')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.92

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}