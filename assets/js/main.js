/* Saveurs d'ici – JavaScript sans dépendance */
(() => {
  /* ----- Menu mobile ----- */
  const menu = document.getElementById("menu");
  const toggle = document.getElementById("menu-toggle");
  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ----- Tuile de couleur + emoji quand une photo est absente ----- */
  const markEmpty = (img) => {
    img.closest(".media").classList.add("is-empty");
    img.remove();
  };
  document.querySelectorAll(".media img").forEach((img) => {
    img.addEventListener("error", () => markEmpty(img), { once: true });
    if (img.complete && img.naturalWidth === 0) markEmpty(img);
  });
})();
