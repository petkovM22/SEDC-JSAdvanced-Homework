let button = document.getElementById("btn");
let filmList = document.getElementById("films");

button.addEventListener("click", () => {
    $.ajax({
        url: "https://swapi.dev/api/films/",
        type: "GET",
        success: function(data) {
            data.results.forEach(film =>{
                let filmItem = document.createElement("li");
                filmItem.innerHTML = film.title;
                filmList.appendChild(filmItem);
            });
        }
    });
});