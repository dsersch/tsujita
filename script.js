const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');
const scrollOptions = {
    rootMargin: '-90% 0px 0px 0px'
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        console.log(entry.target)
        if (!entry.isIntersecting) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    })
}, scrollOptions)

observer.observe(hero);


const boxes = document.querySelectorAll('.left, .right')
console.log(boxes)

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}