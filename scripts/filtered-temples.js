// Get the current date and time
const currentDate = new Date();

// Format the date and time
const lastModified = currentDate.toLocaleString();

// Update the footer with the last modified date
document.getElementById("last-modified").textContent = lastModified;



const temples = [
  {
      name: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      name: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      name: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      name: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      name: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      name: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      name: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      name: "Bern Switzerland",
      location: "Zollikofen, Switzerland",
      dedicated: "1955, September, 11",
      area: 35000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-43401.jpg"
  },
  {
      name: "Copenhagen Denmark",
      location: "Copenhagen, Denmark",
      dedicated: "2004, May, 23",
      area: 25000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16182.jpg"
  },
  {
      name: "Madrid Spain",
      location: "Moraleja, Spain",
      dedicated: "1999, March, 19",
      area: 45000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-54286.jpg"
  }
];


function displayTemples(templesToDisplay) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = ''; // Clear previous cards

    templesToDisplay.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        card.innerHTML = `
            <h2>${temple.name}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.image}" alt="${temple.name} Temple" loading="lazy">
        `;
        templeContainer.appendChild(card);
    });
}

displayTemples(temples); // Initial display of all temples

// Navigation button event listeners
document.getElementById('home').addEventListener('click', () => displayTemples(temples));
document.getElementById('old').addEventListener('click', () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.getElementById('new').addEventListener('click', () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.getElementById('large').addEventListener('click', () => displayTemples(temples.filter(t => t.area > 90000)));
document.getElementById('small').addEventListener('click', () => displayTemples(temples.filter(t => t.area < 10000)));

//  Search functionality

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredTemples = temples.filter(temple => {
        const name = temple.name.toLowerCase();
        const location = temple.location.toLowerCase();

        return name.includes(searchTerm) || location.includes(searchTerm);
    });

    displayTemples(filteredTemples);
});