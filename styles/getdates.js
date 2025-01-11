// Get the current year for copyright
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified; 

// Select the footer elements
const copyrightElement = document.querySelector('footer p:first-of-type');
const lastModifiedElement = document.querySelector('footer p:nth-of-type(2)'); 

// Update the footer content
copyrightElement.textContent = `© Tlokotsi Foulo ${currentYear}`;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;