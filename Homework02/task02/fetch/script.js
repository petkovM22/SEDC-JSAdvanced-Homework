let button = document.getElementById("btn");
let vehicleName = document.getElementById("vehicleName");
let vehicleStats = document.getElementById("vehicleStats");


button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/vehicles/20")
    .then(response => response.json())
    .then(data => {
        document.getElementById("vehicleName").innerHTML = data.name;
        document.getElementById("model").innerHTML = data.model;
        document.getElementById("manufacturer").innerHTML = data.manufacturer;
        document.getElementById("crew").innerHTML = data.crew;
        document.getElementById("passengers").innerHTML = data.passengers;
        document.getElementById("class").innerHTML = data.class;  
    });
});