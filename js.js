document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("dark-mode", this.checked);
  });
  if (localStorage.getItem("dark-mode") === "true") {
    toggle.checked = true;
    document.body.classList.add("dark-mode");
  } else {
    toggle.checked = false;
    document.body.classList.remove("dark-mode");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const oraculoAstroElement = document.getElementById("oraculo-astro-h1");

  oraculoAstroElement.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "index.html";
  });
});
