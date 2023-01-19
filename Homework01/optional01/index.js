let generateBtn = document.getElementById("btn");

generateBtn.addEventListener("click", function(){
    let color = document.getElementById("color").value;
    let fontSize = document.getElementById("fontSize").value + "px";
    let text = document.getElementById("text").value;
    let h1 = document.createElement("h1");

    h1.style.color = color;
    h1.style.fontSize = fontSize;
    h1.innerText = text;

    document.body.appendChild(h1);
    document.getElementById("color").value = "";
    document.getElementById("fontSize").value = "";
    document.getElementById("text").value = "";
});
