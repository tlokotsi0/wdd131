document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
            navigation.classList.remove("active");
        }
    });

    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Paris France",
            location: "Paris, France",
            dedicated: "2017, May, 21",
            area: 44000,
            imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"    
        },
        {
            templeName: "Johannesburg South Africa",
            location: "Johannesburg, South Africa",
            dedicated: "1985, August, 24",
            area: 9000,
            imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
        },
        {
            templeName: "Coban Guatemala",
            location: "Coban, Guatemala",
            dedicated: " 2024, June, 9",
            area: 8772,
            imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
        }
      ];

    // Get the temples section
    const templesSection = document.getElementById("temples");

    // Function to create a temple card
    function createTempleCard(temple) {
        const card = document.createElement("div");
        card.classList.add("temple"); 

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        card.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = temple.templeName;
        card.appendChild(title);

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(area);

        return card;
    }

    // Loop through the temples array and create cards
    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templesSection.appendChild(templeCard);
    });

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
});
