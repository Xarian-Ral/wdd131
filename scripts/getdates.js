const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}


const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modification: ${document.lastModified}`;
}


console.log("JavaScript loaded successfully!");
console.log("Current year set to:", new Date().getFullYear());
console.log("Last modified:", document.lastModified);