let allMedicines = []; //Store all medicines globally in this instance

document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();
});

function fetchMedicines() {
    fetch("http://127.0.0.1:8000/medicines")
    .then(res => res.json())  //Convert response to JSON
    .then(data => {
        allMedicines = data.medicines; //Store the data in the global var
        displayMedicines(allMedicines);  //Initially display all medicines
    })
    .catch(error => console.error("Error fetching medicines:", error));
};

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

    //Filter medicines that include the search query string
    const filteredMedicines = allMedicines.filter(med =>
        med.name.toLowerCase().includes(searchQuery)
    );

    displayMedicines(filteredMedicines); //Update the displayed list
}