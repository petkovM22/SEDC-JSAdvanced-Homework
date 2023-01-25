let button = document.getElementById("btn")
let filmList = document.getElementById("films")


button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/films")
    .then (response => response.json())
    .then(data => {
        data.results.forEach(film => {
            let filmItem = document.createElement("li");
            filmItem.innerHTML = film.title;
            filmList.appendChild(filmItem);
        });
        });
    });
