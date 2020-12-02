  // mobile nav toggle
  const menuToggleMobile = document.querySelector(".mobile-nav-toggle");
  const mobileNavigationContainer = document.querySelector(".l-mobile-nav");
  if (menuToggleMobile) {
    menuToggleMobile.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileNavigationContainer.classList.toggle("l-mobile-nav--active");
    });
  }

  // Second level of navigation on mobile
  const mobileNavMainLinks = document.querySelectorAll('.mobile-nav-main__link');
  mobileNavMainLinks.forEach(link => link.addEventListener("click", function() {
    this.lastElementChild.classList.add("mobile-nav-secondary--active");
    console.log('clicking top level link')
  }))

  const backToTopNavigation = () => {
    const secondaryNav = document.querySelector('.mobile-nav-secondary--active');
    secondaryNav.classList.remove('mobile-nav-secondary--active')
    console.log(secondaryNav)
  }

const backButtons = document.querySelectorAll('.mobile-nav-secondary__back-btn');
backButtons.forEach(button => button.addEventListener("click", backToTopNavigation));
