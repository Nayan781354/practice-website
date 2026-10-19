// ======================================================
// ELEMENTS
// ======================================================

// Back To Top
const backToTop = document.querySelector(".back-to-top");

// Mobile Menu
const menuOpen = document.querySelector(".menu-open");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".humbarger_icon>:nth-child(2)");
const humburgerMenu = document.querySelector(".humbarger_icon>:nth-child(1)");

// Search
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const mobileLogo = document.querySelector(".mobile-logo");

// Footer Dropdowns
const quickLinks = document.querySelector(".quickLinks");
const mobileQuickLinks = document.querySelector(".mobile-quickLinks");

const exploreStates = document.querySelector(".explore_states");
const mobileExploreStates = document.querySelector(".mobile-explore_states");

const resources = document.querySelector(".resources");
const mobileResources = document.querySelector(".mobile-resources");

const contactUs = document.querySelector(".contact_us");
const mobileContactUs = document.querySelector(".mobile-contact-us");

const newsletter = document.querySelector(".newsletter");
const mobileNewsletter = document.querySelector(".mobile-newsletter");

// ======================================================
// VARIABLES
// ======================================================

let showSearchInput = true;
let currentOpen = null;

// ======================================================
// SEARCH INPUT
// ======================================================

searchIcon.addEventListener("click", () => {
  if (showSearchInput) {
    if (window.innerWidth <= 1254) {
      mobileLogo.style.left = "-200px";
    }

    searchInput.style.width = "270px";
    navLinks.style.margin = "0px";

    showSearchInput = false;
  } else {
    searchInput.style.width = "0px";
    mobileLogo.style.left = "30px";
    navLinks.style.margin = "0 0 0 130px";

    showSearchInput = true;
  }
});

// ======================================================
// MOBILE SIDEBAR
// ======================================================

function showSlidebar() {
  navLinks.style.right = "0px";
  closeIcon.style.display = "flex";
  humburgerMenu.style.display = "none";

  menuOpen.style.overflow = "hidden";
}

function closeSlidebar() {
  navLinks.style.right = "-250px";
  closeIcon.style.display = "none";
  humburgerMenu.style.display = "flex";

  menuOpen.style.overflow = "scroll";
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav") && currentOpen !== null) {
    currentOpen.style.display = "none";
    currentOpen = null;
  }
});

// ======================================================
// BACK TO TOP BUTTON
// ======================================================

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ======================================================
// FOOTER DROPDOWNS
// ======================================================

// ---------- Quick Links ----------

quickLinks.addEventListener("click", () => {
  if (currentOpen === mobileQuickLinks) {
    mobileQuickLinks.style.display = "none";
    currentOpen = null;
  } else {
    if (currentOpen !== null) {
      currentOpen.style.display = "none";
    }

    mobileQuickLinks.style.display = "flex";
    currentOpen = mobileQuickLinks;
  }
});

// ---------- Explore States ----------

exploreStates.addEventListener("click", () => {
  if (currentOpen === mobileExploreStates) {
    mobileExploreStates.style.display = "none";
    currentOpen = null;
  } else {
    if (currentOpen !== null) {
      currentOpen.style.display = "none";
    }

    mobileExploreStates.style.display = "flex";
    currentOpen = mobileExploreStates;
  }
});

// ---------- Resources ----------

resources.addEventListener("click", () => {
  if (currentOpen === mobileResources) {
    mobileResources.style.display = "none";
    currentOpen = null;
  } else {
    if (currentOpen !== null) {
      currentOpen.style.display = "none";
    }

    mobileResources.style.display = "flex";
    currentOpen = mobileResources;
  }
});

// ---------- Contact Us ----------

contactUs.addEventListener("click", () => {
  if (currentOpen === mobileContactUs) {
    mobileContactUs.style.display = "none";
    currentOpen = null;
  } else {
    if (currentOpen !== null) {
      currentOpen.style.display = "none";
    }

    mobileContactUs.style.display = "flex";
    currentOpen = mobileContactUs;
  }
});

// ---------- Newsletter ----------

newsletter.addEventListener("click", () => {
  if (currentOpen === mobileNewsletter) {
    mobileNewsletter.style.display = "none";
    currentOpen = null;
  } else {
    if (currentOpen !== null) {
      currentOpen.style.display = "none";
    }

    mobileNewsletter.style.display = "flex";
    currentOpen = mobileNewsletter;
  }
});


// ======================================================
// Featured Destinations Slider...
// ======================================================


const destinationPrev = document.querySelector(".destination-prev");
const destinationNext = document.querySelector(".destination-next");
const destinationContainer = document.querySelector(
  ".destination-place-container",
);
const destinationsPlace = document.querySelectorAll(".destinations-place");

let slideNumber = 1;
const destinationsPlaceLength = destinationsPlace.length;

destinationNext.addEventListener("click", () => {
  if (window.innerWidth <= 1254 && slideNumber < destinationsPlaceLength) {
    destinationContainer.style.transform = `translateX(-${slideNumber * 303}px)`;
    slideNumber++;
  } else {
    destinationContainer.style.transform = `translateX(-0px)`;
    slideNumber = 1;
  }
});


destinationPrev.addEventListener("click", () => {
  if (window.innerWidth <= 1254 && slideNumber > 1) {
    slideNumber--;
    destinationContainer.style.transform = `translateX(-${(slideNumber - 1) * 303}px)`;
  } else {
    destinationContainer.style.transform = `translateX(-${(destinationsPlaceLength-1)* 303}px)`;
    slideNumber = destinationsPlaceLength;
  }
});

// ======================================================
// CLOSE FOOTER DROPDOWN WHEN CLICKING OUTSIDE
// ======================================================

document.addEventListener("click", (event) => {
  if (!event.target.closest(".footer-content") && currentOpen !== null) {
    currentOpen.style.display = "none";
    currentOpen = null;
  }
});
