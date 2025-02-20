let allMedicines = []; //Store all medicines globally
let sortEnabled = false; //Track if sorting is active

document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();
});

function fetchMedicines() {
    fetch("http://127.0.0.1:8000/medicines")
    .then(res => res.json())  //Convert response to JSON
    .then(data => {
        allMedicines = data.medicines; //Store data globally
        displayMedicines(data.medicines); //Ensure correct data is displayed
    })
    .catch(error => console.error("Error fetching medicines:", error));
};

function updateDisplayedMedicines(searchQuery = "") {
    let filteredMedicines = allMedicines;

    //Apply a search filter if there is a query
    if (searchQuery) {
        filteredMedicines = allMedicines.filter(med =>
            med.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
    }

    //Apply sorting if sorting enabled
    if (sortEnabled) {
        filteredMedicines = [...filteredMedicines].sort((a,b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
    }

    displayMedicines(filteredMedicines);
}

function displayMedicines(medicines){
    const listContainer = document.querySelector(".medicine-list"); //Retrieve the main from doc
    listContainer.innerHTML = ""; //Clear the previous content of main

    medicines.forEach(med => {
        if(!med.name) return; //Skip iteration if name is null

        const medElement = document.createElement("div"); //Creates a medicine element
        medElement.classList.add("medicine-card"); //Styling class for a medicine element

        const priceElement = document.createElement("p");
        
        if (typeof med.price === "number") {
            priceElement.textContent = `£${med.price.toFixed(2)}`;
            priceElement.style.color = "green"; // Ensure correct color for valid prices
        } else {
            priceElement.textContent = "Price Not Available";
            priceElement.classList.add("price-unavailable"); // Apply red class for missing price
        }

        medElement.innerHTML = `<h3>${med.name}</h3>`;
        medElement.appendChild(priceElement);
        listContainer.appendChild(medElement);
    });
};

function filterMedicines() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    updateDisplayedMedicines(searchQuery);
}

function toggleSort() {
    sortEnabled = !sortEnabled; //Toggle sorting state
    updateDisplayedMedicines(document.getElementById("search-bar").value); //Reapply sorting with the current search

    //Update the button style
    const sortButton = document.querySelector(".sort-icon");
    if (sortEnabled) {
        sortButton.classList.add("active-sort");
    } else {
        sortButton.classList.remove("active-sort");
    }
}

function openModal() {
    document.getElementById("medicine-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("medicine-modal").style.display = "none";
}