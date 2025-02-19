document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();
});

function fetchMedicines() {
    fetch("http://127.0.0.1:8000/medicines")
    .then(res => res.json())  //Convert response to JSON
    .then(data => displayMedicines(data.medicines))  //Pass the data to display function
    .catch(error => console.error("Error fetching medicines:", error));
};

function displayMedicines(medicines){
    const main = document.querySelector("main"); //Retrieve the main from doc
    main.innerHTML = ""; //Clear the previous content of main

    medicines.forEach(med => {
        if(!med.name) return; //Skip iteration if name is null

        const medElement = document.createElement("div"); //Creates a medicine element
        medElement.classList.add("medicine-card"); //Styling class for a medicine element
        const priceText = (typeof med.price === "number") ? `£${med.price.toFixed(2)}` : "Price Not Available";

        medElement.innerHTML = `
        <h3>${med.name}</h3>
        <p>${priceText}</p>
    `;
    main.appendChild(medElement); //Add the element to the page
    });
};