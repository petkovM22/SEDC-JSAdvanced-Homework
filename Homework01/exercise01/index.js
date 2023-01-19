function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    let color = getRandomColor();
    document.body.style.background = color;
    document.getElementById("rgb").innerHTML = color;
}

window.addEventListener("load", changeColor);