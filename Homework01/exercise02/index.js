let names = ["Martin", "Hristina", "Ilija", "Toni", "Angel"];

let fillListButton = document.getElementById("btn");

fillListButton.addEventListener("click", function(){
    let parentDiv = document.getElementById("lists");
    names.forEach(function(name) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
    parentDiv.appendChild(ul);
    })
});