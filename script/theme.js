(function () {
  var html = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var tooltip = document.querySelector(".theme-tooltip");

  function currentTheme() {
    return html.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    var next = theme === "light" ? "dark" : "light";
    if (toggle) {
      toggle.setAttribute("aria-label", "Switch to " + next + " theme");
    }
    if (tooltip) {
      tooltip.textContent = next + " mode";
    }
  }

  applyTheme(currentTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "light" ? "dark" : "light");
    });
  }
})();
