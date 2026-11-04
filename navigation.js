
/* =========================================================
   NAVIGATION.JS — CORNER69
   Navigation entre les sections sans supprimer le HTML
   Préserve le catalogue, les variantes et les fiches produits
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    "accueil",
    "video",
    "catalogue",
    "avis",
    "contact"
  ];

  const navLinks = document.querySelectorAll("[data-view]");
  const allSections = sections
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function showSection(sectionId) {
    const target = document.getElementById(sectionId);

    if (!target) {
      console.warn("Section introuvable :", sectionId);
      return;
    }

    allSections.forEach(section => {
      section.hidden = section !== target;
      section.classList.toggle("active-view", section === target);
    });

    navLinks.forEach(link => {
      const active = link.dataset.view === sectionId;
      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    history.replaceState(null, "", `#${sectionId}`);
  }

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      const sectionId = link.dataset.view;

      if (!sectionId) return;

      event.preventDefault();
      showSection(sectionId);
    });
  });

  const initialSection = location.hash.replace("#", "");

  if (sections.includes(initialSection)) {
    showSection(initialSection);
  } else {
    showSection("accueil");
  }

  window.CORNER69_NAV = {
    show: showSection
  };
});
