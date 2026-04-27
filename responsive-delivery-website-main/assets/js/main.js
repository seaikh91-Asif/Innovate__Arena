/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
            toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })

}

showMenu('nav-menu', 'nav-toggle')

/*=============== REMOVE MENU MOBILE ===============*/
// 1. Use querySelectorAll to get a list of all links
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    // 2. Remove the dot ('.') inside getElementById
    const navMenu = document.getElementById('nav-menu')
    
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

// 3. This now works because navLink is a NodeList
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // add a class if the bottom affset is greater then 50 of the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER REVIEWS ===============*/
const swiperReviews = new Swiper('.reviews__swiper', {
  loop: true,
  spaceBetween: 16,
  grabcursor: true,
  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:{
    delay: 2000,
    disableOnInteraction: false,
  }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewpor height, add the sho-scroll class to the website 
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                  : scrollUp.classList.remove('show-scroll')    
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'), // Added missing comma here
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') 

    // Optional check: Ensure sectionClass exists before adding/removing classes
    if(sectionClass) {
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
      } else {
        sectionClass.classList.remove('active-link')
      }
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconSun = 'ri-sun-fill'
const iconMoon = 'ri-moon-fill'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconSun) ? iconSun : iconMoon

// We validate if the user fulfilled, we ask what the issue was to know if we activate or deactivate
if (selectedTheme) {
  // Apply the saved theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  
  // Apply the saved icon properly
  if (selectedIcon === iconSun) {
    themeButton.classList.add(iconSun)
    themeButton.classList.remove(iconMoon)
  } else {
    themeButton.classList.add(iconMoon)
    themeButton.classList.remove(iconSun)
  }
}

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
  // Add or remove the dark theme
  document.body.classList.toggle(darkTheme)
  
  // Swap the icons directly (ekta add hobe, onnyota remove hobe)
  themeButton.classList.toggle(iconSun)
  themeButton.classList.toggle(iconMoon)
  
  // We save the theme and the current icon that the user chose 
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top', 
  distance: '60px', 
  duration: 2000,
  
});

sr.reveal(`.header`, {origin: 'top', delay: 100});

sr.reveal(`.home__title, .home__description, .home__data, button`, {interval: 100});
sr.reveal(`.home__image`, {delay: 900}); 
sr.reveal(`.home__phone`, {origin: 'left', delay: 1500}); 
sr.reveal(`.home__comment`, {origin: 'right', delay: 1800}); 
sr.reveal(`.home__social`, {origin: 'bottom', delay: 2100}); 
sr.reveal(`.service__card, .service__title, .service__description`, {interval: 100});

sr.reveal(`.menu__card`, {interval: 100});

sr.reveal(`.reviews__content`, {origin: 'right'});
sr.reveal(`.reviews__image`, {origin: 'left', delay: 600}); 

sr.reveal(`.app .section__subtitle, .app .section__title, .app__description, .app .button`, {interval: 100});
sr.reveal(`.app__image`, {origin: 'bottom', delay: 900});

sr.reveal(`.map__area`, {origin: 'right'}); 
sr.reveal(`.map__card`, {origin: 'left', delay: 600}); 

sr.reveal(`.footer__data, .footer__content div`, {interval: 100});

sr.reveal(`.footer__copy`, {origin: 'bottom', delay: 800});