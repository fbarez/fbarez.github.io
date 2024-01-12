const navLinks = document.querySelectorAll("nav ul li a");
const container = document.querySelector("body > div.container"); // Replace with your container ID

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", checkActive);

  function checkActive() {
    const scrollTop = window.scrollY;
    console.log(scrollTop);
    for (const child of container.children) {
      const childTop = child.offsetTop;
      const childHeight = child.offsetHeight;

      if (scrollTop >= childTop && scrollTop < childTop + childHeight) {
        const matchingLink = [...navLinks].find(
          (link) => link.dataset.target === child.id
        );

        if (matchingLink) {
          navLinks.forEach((link) => link.classList.remove("active"));
          matchingLink.classList.add("active");
        }
      }
    }
  }
});

window.addEventListener("DOMContentLoaded", (e) => {
  const mainNav = document.body.querySelector(".navbar-nav");
  if (mainNav) {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#navbar",
      offset: 74,
    });

    scrollSpy.refresh();

    // $("body").scrollspy({ target: "#navbar", offset: 50 });
  }
});
