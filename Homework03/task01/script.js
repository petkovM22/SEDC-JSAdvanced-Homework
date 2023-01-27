let button = document.getElementById("button");

let changeColor = (element, color = `black` ) => {
    element.style.color = color;
}

let changeSize = (element, textSize = 24) => {
    element.style.fontSize = textSize + `px`;
}

button.addEventListener("click", () => {
    let textSize = document.getElementById("textSizeInput").value;
    let color = document.getElementById("textColorInput").value
    let header = document.getElementById("header");

    changeColor(header, color);
    changeSize(header, textSize);
})

