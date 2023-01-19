let generateBtn = document.getElementById("btn");


generateBtn.addEventListener("click", function() {
    let color = document.getElementById("color").value;
    let fontSize = document.getElementById("fontSize").value + "px";
    let items = document.getElementById("items").value.split(",");

    let ul = document.createElement("ul");
    ul.style.color = color;
    ul.style.fontSize = fontSize;
    items.forEach(function(item){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
    document.getElementById("color").value = "";
    document.getElementById("fontSize").value = "";
    document.getElementById("items").value = "";
});