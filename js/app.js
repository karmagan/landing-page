/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById('navbar__list')
const sectionsList = document.querySelectorAll('section')
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const formatNavItem = (section)=>{
    const navItem = document.createElement('li')
    const itemLink = document.createElement('a')
    itemLink.textContent = section.getAttribute('data-nav')
    itemLink.href = '#'+section.id
    itemLink.classList.add('menu__link')
    navItem.appendChild(itemLink)
    return navItem
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const createNavbar = () =>{
    let output = document.createDocumentFragment()
    sectionsList.forEach((section)=>{
        output.append(formatNavItem(section))
    })
    navbarList.appendChild(output)
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('DOMContentLoaded',createNavbar)

// Build menu 

// Scroll to section on link click

// Set sections as active


