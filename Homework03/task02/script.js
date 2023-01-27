let button = document.getElementById("button");

let getPlanets = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => showPlanets(data.results.slice(0,10)));
}

let showPlanets = (planets) => {
    let table = document.getElementById("tablePlanets");
    for (let i=0; i < planets.length; i++) {
        let row = table.insertRow();
        let nameCell = row.insertCell(0);
        let populationCell = row.insertCell(1);
        let climateCell = row.insertCell(2);
        let gravityCell = row.insertCell(3);
        nameCell.innerHTML = planets[i].name;
        populationCell.innerHTML = planets[i].population;
        climateCell.innerHTML = planets[i].climate;
        gravityCell.innerHTML = planets[i].gravity;
    }
}

button.addEventListener("click", () => {
    getPlanets("https://swapi.dev/api/planets/?page=1");
})