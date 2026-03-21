const today = new Date();
const currentYear = document.querySelector("#current-year");
currentYear.textContent = today.getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;


// Defining temperature section variables
//
const temp = document.querySelector("#temp-dtt").innerHTML = "<p> 10 &degC </p>"
const condition = document.querySelector("#cnd-dtt").textContent = "Party Cloudy"
const wind = document.querySelector("#wind-dtt").textContent = "5 Km/h"
let windChill = document.querySelector("#w-chill-dtt");

// Defining function that will calculate windchill

function calculateWindChill(temp, windSpd) {
    if (temp >= 10 & windSpd < 4.8) {
        const wChillTem =
            13.12 + 0.6215 * temp - 11.37 * windSpd + 0.3965 * windSpd;
        return Math.round(wChillTem)

    }

    else {
        return "N/A"
    }
}

windChill.innerHTML = `${calculateWindChill(10, 4.3)} <span>&degC</span>`
