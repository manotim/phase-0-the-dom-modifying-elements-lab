// Write your code here!
const ul = document.getElementById("main");

ul.remove();

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

newHeader.setAttribute("id", "victory");

newHeader.textContent = "Mike is the champion";