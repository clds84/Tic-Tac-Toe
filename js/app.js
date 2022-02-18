const resetButton = document.querySelector('#reset')
const userMessage = document.querySelector('#message')
const Box1 = document.querySelector('#box1')
const Box2 = document.querySelector('#box2')
const Box3 = document.querySelector('#box3')
const Box4 = document.querySelector('#box4')
const Box5 = document.querySelector('#box5')
const Box6 = document.querySelector('#box6')
const Box7 = document.querySelector('#box7')
const Box8 = document.querySelector('#box8')
const Box9 = document.querySelector('#box9')
const winTieMessage = document.getElementById('win-tie-message')
const currentPlayer = document.getElementById('player-turn')

let player = "x"
const playerTurn = (event) => {
    currentPlayer.innerText = `${player}'s turn`
    if (player === 'x'){
        player = 'o'      
    }
    else {
        player = 'x'
    }
}
const addMoveBox1 = (event) => {
    playerTurn()
    const addX = document.createElement('p')
    addX.innerText = player
    Box1.appendChild(addX)
    winGame()
    Box1.removeEventListener('click',addMoveBox1)
     
}
const addMoveBox2 = (event) => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box2.appendChild(addX)
    winGame()
    Box2.removeEventListener('click',addMoveBox2)
}
function addMoveBox3(event) {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box3.appendChild(addX)
    winGame()
    Box3.removeEventListener('click', addMoveBox3)
    console.log(event.target)
}
const addMoveBox4 = (event) => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box4.appendChild(addX)
    winGame()
    if(Box4.firstChild){
        Box4.removeChild(Box4.firstChild)
        }
        Box4.removeEventListener('click',addMoveBox4)
}
const addMoveBox5 = (event) => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box5.appendChild(addX)
    winGame()
    if(Box5.firstChild){
      Box5.removeChild(Box5.firstChild)
    }
    Box5.removeEventListener('click',addMoveBox5)

}
const addMoveBox6 = () => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box6.appendChild(addX)
    winGame()
    if(Box6.firstChild){
        Box6.removeChild(Box6.firstChild)
        }
        Box6.removeEventListener('click',addMoveBox6)
}
const addMoveBox7 = () => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box7.appendChild(addX)
    winGame()
    if(Box7.firstChild){
        Box7.removeChild(Box7.firstChild)
        }
        Box7.removeEventListener('click',addMoveBox7)
}
const addMoveBox8 = (event) => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box8.appendChild(addX)
    winGame()
    if(Box8.firstChild){
        Box8.removeChild(Box8.firstChild)
        }
        Box8.removeEventListener('click',addMoveBox8)
}
const addMoveBox9 = (event) => {
    playerTurn()
    const addX = document.createElement("p")
    addX.innerText = player
    Box9.appendChild(addX)
    winGame()
    if(Box9.firstChild){
        Box9.removeChild(Box9.firstChild)
    }
        Box9.removeEventListener('click',addMoveBox9)            
}
const winGame = () => {
  let winGame = true
    if (Box1.innerText !== "" && Box2.innerText !== "" && Box3.innerText !== "" &&
    Box4.innerText !== "" && Box5.innerText!== "" && Box6.innerText !== "" &&
    Box7.innerText !== "" && Box8.innerText !== "" && Box7.innerText !== "" &&
    Box2.innerText !== "" && Box5.innerText !== "" && Box8.innerText !== "" &&
    Box3.innerText !== "" && Box6.innerText !== "" && Box9.innerText !== "" &&
    Box7.innerText !== "" && Box5.innerText !== "" && Box3.innerText !== "" &&
    Box1.innerText !== "" && Box5.innerText !== "" && Box9.innerText !== ""){ 
        
    winTieMessage.innerText = `it's a tie!`
         
    currentPlayer.innerText = "click reset to play again!"
    }
    else if (Box1.innerText === player && Box2.innerText === player && Box3.innerText === player ||
    Box4.innerText === player && Box5.innerText === player && Box6.innerText === player ||
    Box1.innerText === player && Box4.innerText === player && Box7.innerText === player ||
    Box2.innerText === player && Box5.innerText === player && Box8.innerText === player ||
    Box3.innerText === player && Box6.innerText === player && Box9.innerText === player ||
    Box7.innerText === player && Box5.innerText === player && Box3.innerText === player ||
    Box1.innerText === player && Box5.innerText === player && Box9.innerText === player){
       
    winTieMessage.innerText = `${player} wins!`
         
    currentPlayer.innerText = "click reset to play again!"

    Box1.removeEventListener('click',addMoveBox1)
    Box2.removeEventListener('click',addMoveBox2)
    Box3.removeEventListener('click',addMoveBox3)
    Box4.removeEventListener('click',addMoveBox4)
    Box5.removeEventListener('click',addMoveBox5)
    Box6.removeEventListener('click',addMoveBox6)
    Box7.removeEventListener('click',addMoveBox7)
    Box8.removeEventListener('click',addMoveBox8)
    Box9.removeEventListener('click',addMoveBox9)
    }
}
const clearGame = () => {
        window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    playerTurn()
    Box1.addEventListener('click',addMoveBox1)
    Box2.addEventListener('click',addMoveBox2)
    Box3.addEventListener('click',addMoveBox3)
    Box4.addEventListener('click',addMoveBox4)
    Box5.addEventListener('click',addMoveBox5)
    Box6.addEventListener('click',addMoveBox6)
    Box7.addEventListener('click',addMoveBox7)
    Box8.addEventListener('click',addMoveBox8)
    Box9.addEventListener('click',addMoveBox9)
    resetButton.addEventListener('click',clearGame)
})
