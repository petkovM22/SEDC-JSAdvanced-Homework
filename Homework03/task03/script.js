let button = document.getElementById("button");

let currentPage = 1;

let getPlanets = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => showPlanets(data.results.slice(0,10)));
}

let showPlanets = (planets) => {
    let table = document.getElementById("tablePlanets");
        table.innerHTML = "";
    for (let i = 0; i < planets.length; i++) {
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

let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
prevButton.style.display = "none";
nextButton.style.display = "none";

button.addEventListener("click", () => {
    getPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`);
    nextButton.style.display = "block";
    button.style.display = "none";
})

nextButton.addEventListener("click", () => {
    currentPage++;
    getPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`)
    nextButton.style.display = "none";
    prevButton.style.display = "block";
    button.style.display = "none";
})

prevButton.addEventListener("click", () => {
    currentPage--;
    getPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`);
    nextButton.style.display = "block";
    prevButton.style.display = "none";
    button.style.display = "none";
})