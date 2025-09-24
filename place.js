const temperature = 10; 
const windSpeed = 5; 

param {number} temp 
param {number} wind
returns {number} 

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

function setCurrentYear() {
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

function setLastModified() {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    }
}

function displayWindChill() {
    const windChillElement = document.getElementById("windchill");
    
    if (!windChillElement) {
        console.error("Wind chill element not found");
        return;
    }
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
        console.log(`Wind chill calculated: ${windChill.toFixed(1)} °C`);
    } else {
        windChillElement.textContent = "N/A";
        console.log("Wind chill conditions not met - displaying N/A");
    }
}

function initializePage() {
    console.log("Madagascar Place Page - JavaScript loaded");
    
    setCurrentYear();
    setLastModified();
    
    displayWindChill();
    
    console.log(`Current conditions: ${temperature}°C, ${windSpeed} km/h`);
    console.log("Page initialization complete");
}

document.addEventListener('DOMContentLoaded', initializePage);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}