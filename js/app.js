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
const navbarList = document.querySelector("#navbar__list");
const sectionsList = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const formatNavItem = (section) => {
  const navItem = document.createElement("li");
  const itemLink = document.createElement("a");
  itemLink.textContent = section.getAttribute("data-nav");
  itemLink.href = "#" + section.id;
  itemLink.classList.add("menu__link");
  navItem.appendChild(itemLink);
  return navItem;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const createNavbar = () => {
  let output = document.createDocumentFragment();
  sectionsList.forEach((section) => {
    output.append(formatNavItem(section));
  });
  navbarList.appendChild(output);
};

// Add class 'active' to section when near top of viewport
const activateSection = () => {
  sectionsList.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.y < window.innerHeight / 3 &&
      rect.bottom > window.innerHeight / 3
    ) {
      section.classList.add("active");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active");
    } else {
      section.classList.remove("active");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.remove("active");
    }
  });
};

// Scroll to anchor ID using scrollTO event

const navigateHandler = (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    document
      .querySelector(`section${e.target.getAttribute("href")}`)
      .scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.addEventListener("DOMContentLoaded", createNavbar);

// Scroll to section on link click
document
  .querySelector("#navbar__list")
  .addEventListener("click", navigateHandler);
  
document.querySelector("#link__top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
// Set sections as active
document.addEventListener("scroll", activateSection);
