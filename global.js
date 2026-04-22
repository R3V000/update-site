document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector(".main__menu");
  const navTitles = document.querySelectorAll(".nav--title");
  const navLinks = document.querySelectorAll("a.item-content");
  const loader = document.querySelector(".page-loader");
  const loadingText = document.getElementById("loadingText");
  const sections = Array.from(document.querySelectorAll(".section[id]"));
  const nav = document.querySelector(".nav--list");
  const banners = Array.from(document.querySelectorAll(".main__photo--background"));
  const images = Array.from(document.images);

  let currentId = null;
  let ticking = false;
  let loaderInterval = null;

  function closeMobileMenu() {
    if (!hamburger || !menu) {
      return;
    }

    hamburger.classList.remove("hamburger-open");
    menu.classList.remove("active");
    body.classList.remove("scroll_block");
  }

  function toggleMobileMenu() {
    if (!hamburger || !menu) {
      return;
    }

    const isOpen = hamburger.classList.toggle("hamburger-open");
    menu.classList.toggle("active", isOpen);
    body.classList.toggle("scroll_block", isOpen);
  }

  function updateLoader() {
    if (!loader || !loadingText || images.length === 0) {
      return;
    }

    const loadedCount = images.filter((image) => image.complete || image.naturalHeight > 0).length;
    const percentage = Math.round((loadedCount / images.length) * 100);
    loadingText.textContent = `${percentage}%`;

    if (loadedCount !== images.length) {
      return;
    }

    loader.classList.add("is-hidden");
    window.clearInterval(loaderInterval);
    window.setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }

  function setActiveSection(id) {
    if (!id || id === currentId || !nav) {
      return;
    }

    currentId = id;

    nav.querySelectorAll("li a.active").forEach((link) => link.classList.remove("active"));
    nav.querySelectorAll(`li.${id} a`).forEach((link) => link.classList.add("active"));

    banners.forEach((banner) => {
      banner.classList.toggle("active", banner.classList.contains(`el_${id}`));
    });
  }

  function computeActiveSection() {
    const pivot = window.scrollY + window.innerHeight * 0.35;
    let winner = "section_1";

    for (const section of sections) {
      if (section.offsetTop <= pivot) {
        winner = section.id;
      } else {
        break;
      }
    }

    setActiveSection(winner);
  }

  function onScroll() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(() => {
      computeActiveSection();
      ticking = false;
    });
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  navTitles.forEach((title) => {
    title.addEventListener("click", () => {
      title.parentElement?.classList.toggle("active");
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        closeMobileMenu();
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      closeMobileMenu();

      const offsetTop = target.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  if (loader && loadingText && images.length > 0) {
    updateLoader();
    loaderInterval = window.setInterval(updateLoader, 250);
  } else if (loader) {
    loader.style.display = "none";
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", computeActiveSection);
  computeActiveSection();
});
