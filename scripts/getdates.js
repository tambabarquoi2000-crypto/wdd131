const today = new Date()
const currentYear = document.querySelector("#current-year");
currentYear.innerHTML = today.getFullYear();
document.querySelector("#last-modified").innerHTML = `<span class="highlight">Last Modified ${document.lastModified}</span>`;

