(() => {
  const navButton = document.querySelector(".academic-menu-toggle");
  const navLinks = document.getElementById("academic-navigation");
  const profileButton = document.querySelector(".author__urls-wrapper button");
  const profileLinks = document.getElementById("author-links");
  const mobileNavigation = window.matchMedia("(max-width: 700px)");
  const desktopProfile = window.matchMedia("(min-width: 925px)");

  const setNavigation = (open) => {
    navButton.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
  };
  const setProfile = (open) => {
    profileButton.setAttribute("aria-expanded", String(open));
    profileLinks.hidden = !open;
  };

  if (navButton && navLinks) {
    navButton.addEventListener("click", () => {
      setNavigation(navButton.getAttribute("aria-expanded") !== "true");
    });
    mobileNavigation.addEventListener("change", () => setNavigation(false));
  }
  if (profileButton && profileLinks) {
    const updateProfile = () => setProfile(desktopProfile.matches);
    updateProfile();
    desktopProfile.addEventListener("change", updateProfile);
    profileButton.addEventListener("click", () => {
      setProfile(profileButton.getAttribute("aria-expanded") !== "true");
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (navButton && navLinks && navButton.getAttribute("aria-expanded") === "true") {
      setNavigation(false);
      navButton.focus();
    }
    if (profileButton && profileLinks && !desktopProfile.matches && !profileLinks.hidden) {
      setProfile(false);
      profileButton.focus();
    }
  });
})();
