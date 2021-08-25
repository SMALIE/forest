const footerYear = document.querySelector('.footer__text-date')
const body = document.querySelector('body')
const burgerBtn = document.querySelector('.nav__burger')
const navSlide = document.querySelector('.nav__slide')
const navItems = document.querySelectorAll('.nav__slide-item')
const navListItems = document.querySelectorAll('.nav__list-item a')
const html = document.querySelector('html')
const scrollSections = document.querySelectorAll('.section')

const handleScrollSpy = () => {
    if(document.body.classList.contains('main-page')) {
        let sections = []
        let navPadding = 85

        scrollSections.forEach(section => {

            if(window.scrollY <= section.offsetTop + section.offsetHeight - navPadding) {
                sections.push(section)
                
                const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
                
                navListItems.forEach(item => {
                    item.classList.remove('nav--active')
                })

                activeSection.classList.add('nav--active')
            }
        })
    }
}

const handleNav = () => {
    window.scrollTo(0, 15);
    navSlide.classList.toggle('nav__slide--active')
    body.classList.toggle('overflow')
}

const handleNavItems = () => {
    navSlide.classList.remove('nav__slide--active')
    body.classList.remove('overflow')
}

const setYear = () => {
    footerYear.textContent = new Date().getFullYear()
}

setYear()

burgerBtn.addEventListener('click', handleNav)

navItems.forEach(item => item.addEventListener('click', handleNavItems))

window.addEventListener('scroll', handleScrollSpy)