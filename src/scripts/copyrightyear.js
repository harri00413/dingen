// Stop het huidige jaar in de copyright regel, in dezelfde document ready function..
// Huidig jaar functie NO jQuery
// Start function on loaded document
document.addEventListener("DOMContentLoaded", () => copyrightYear());

// year website went on-line
const startYear = 2008;

function copyrightYear() {
  const copyrightYearElem = document.getElementById("copyrightyear");

  const curYear = new Date().getFullYear();

  if (startYear == curYear) {
    copyrightYearElem.textContent = curYear;
  } else {
    copyrightYearElem.textContent = startYear + " - " + curYear;
  }
}