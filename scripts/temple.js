today = new Date ();

const currentYear = document.querySelector("#current-year")
currentYear.textContent = today.getFullYear();

const lastVisited = document.querySelector("#last-modified");
lastVisited.innerHTML = `<span class="highlight"> Last Modified ${document.lastModified}`

const hamburger = document.querySelector("#menu");
const navigator = document.querySelector(".navigation")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open")
    navigator.classList.toggle("open")
})


