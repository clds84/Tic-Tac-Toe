
const generateBox1Buttons = document.querySelector('#box1');
const generateBox1Buttons = document.querySelector('#box2');



const buttonX = document.createElement("button")
buttonX.classList.add("butt1")
//button.type = "submit"
buttonX.innerHTML = "X"
generateBox1Buttons.appendChild(buttonX)

const buttonO = document.createElement("button")
buttonO.classList.add("butt1")
//button.type = "submit"
buttonO.innerHTML = "O"
generateBox1Buttons.appendChild(buttonO)
