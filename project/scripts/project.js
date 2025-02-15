document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.getAttribute("data-page");

    if (currentPage === "home") {
        setupHomePage();
    }

    if (currentPage === "contact") {
        setupContactForm();
    }

    if (currentPage === "about") {
        setupProductPage();
    }

    if (currentPage === "thank") {
        setupThankPage();
    }
});
function setupHomePage() {

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const products = [
        {
            productName: "Abseiling",
            category: "Activities",
            image: "images/abseiling.jpeg",
        },
        {
            productName: "Bird watching",
            category: "Nature",
            image: "images/bird2.jpeg",
        },
        {
            productName: "Camping",
            category: "Nature",
            image: "images/camping.jpeg",
        },
        {
            productName: "Fishing",
            category: "Activities",
            image: "images/fishing.jpeg",
        },
        {
            productName: "Hiking",
            category: "Activities",
            image: "images/hiking1.jpeg",
        },
        {
            productName: "Horse Riding",
            category: "Activities",
            image: "images/horse-riding.jpeg",
        },
    ];

    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.productName.toLowerCase().includes(filter)
        );
        createProducts(filteredProducts);
    });

    createProducts(products);

    function createProducts(productToShow) {
        const productGrid = document.querySelector(".products-grid");
        productGrid.innerHTML = "";

        productToShow.forEach(products => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let category = document.createElement("p");
            let img = document.createElement("img");
            let button = document.createElement("button");

            name.textContent = products.productName;
            category.innerHTML = `<span class="figcaption"></span> ${products.category}`;
            img.setAttribute("src", products.image);
            img.setAttribute("alt", `${products.productName}`);
            img.setAttribute("loading", "lazy");
            button.textContent = "Book now";
            button.className = "select-button";

            card.appendChild(name);
            card.appendChild(category);
            card.appendChild(img);
            card.appendChild(button);

            productGrid.appendChild(card);
        });
    }

    function displayCopyright() {
        const currentYear = new Date().getFullYear();
        document.getElementById('copyright').textContent = `© ${currentYear} Semonkong Adventures - Semonkong Lesotho`;
    }

    function displayLastModified() {
        const lastModified = document.lastModified;
        document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
    }

    displayCopyright();
    displayLastModified();

}


function setupContactForm() {
    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const contactForm = document.getElementById("ContactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const phonenumber = document.getElementById("phonenumber").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("msg").value;
        const newsletter = document.getElementById("newsletter").checked;

        const contactInfo = {
            name: fullname,
            phone: phonenumber,
            email: email,
            message: message,
            subscribe: newsletter
        };

        const existingContacts = JSON.parse(localStorage.getItem("contacts")) || [];
        existingContacts.push(contactInfo);
        localStorage.setItem("contacts", JSON.stringify(existingContacts));
        document.getElementById("thankYouMessage").style.display = "block";

        alert("Thank you for contacting us. We will get back to you shortly.");

    });

    function displayCopyright() {
        const currentYear = new Date().getFullYear();
        document.getElementById('copyright').textContent = `© ${currentYear} Semonkong Adventures - Semonkong Lesotho`;
    }

    function displayLastModified() {
        const lastModified = document.lastModified;
        document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
    }

    displayCopyright();
    displayLastModified();
}

function setupProductPage() {

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const category = document.querySelector('.category')
    const categorynav = document.querySelector('#categorynav');

    hambutton.addEventListener('click', (event) => {
        category.classList.toggle('show');
        categorynav.classList.toggle('show');
    });
    function displayCopyright() {
        const currentYear = new Date().getFullYear();
        document.getElementById('copyright').textContent = `© ${currentYear} Semonkong Adventures - Semonkong Lesotho`;
    }

    function displayLastModified() {
        const lastModified = document.lastModified;
        document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
    }

    displayCopyright();
    displayLastModified();
}

function setupThankPage() {
    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    function displayCopyright() {
        const currentYear = new Date().getFullYear();
        document.getElementById('copyright').textContent = `© ${currentYear} Semonkong Adventures - Semonkong Lesotho`;
    }

    function displayLastModified() {
        const lastModified = document.lastModified;
        document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
    }

    displayCopyright();
    displayLastModified();
};