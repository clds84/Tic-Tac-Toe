//create variables to reference 9 boxes each with specific ID

const reset = document.querySelector('#reset')
const message = document.querySelector('#message')
const playAgainButton = document.querySelector('#play-again')
const Box1 = document.querySelector('#box1')
const Box2 = document.querySelector('#box2')
const Box3 = document.querySelector('#box3')
const Box4 = document.querySelector('#box4')
const Box5 = document.querySelector('#box5')
const Box6 = document.querySelector('#box6')
const Box7 = document.querySelector('#box7')
const Box8 = document.querySelector('#box8')
const Box9 = document.querySelector('#box9')

//Was playing around with querySelectorAll to reference
//all of them via class
//const Boxes = document.querySelectorAll('.childDiv')

//create an array to store the querySelector for each box
const boxes = [Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9]

////const boxesId = ['#box1','#box2','#box3','#box4','#box5','#box6','#box7','#box8','#box9']

//create a function for appending a child into the div
//so it loops through the nine boxes referenced in the array

const playerMove = () => { 
    //didn't get to figure out how to apply the logic
    //to switch values
   let player1 = "o"
   let player2 = "x"
   
   for (let i = 0; i < boxes.length; i++) {
    //console.log(boxes[i]) 
        boxes[i].onclick = function () {
        addXtoBox = document.createElement("p")
        addXtoBox.innerText = "x"
        boxes[i].appendChild(addXtoBox)
        //create a condition so the child that's appended
        //doesn't repeat whenever I click
            if(boxes[i].firstChild){
            boxes[i].removeChild(boxes[i].firstChild)
            }
        }
    }
}  

//create a variable to generate game once the game ends, include
//an innerText for the <p> element in html that has a specific ID
//so the user is instructed to play again

const generateGame = () => {
message.innerText = "Make your move!"
// I tried playing around with the playerMove() function and placing it 
//because I was having issues being able to append children to the divs
//once the game is cleared.
playerMove()
}

const clearGame = () => {
    for (let i = 0;i < boxes.length;i++){
       boxes[i].removeChild(boxes[i].firstChild)
    }
message.innerText = 'game successfully cleared'
}


document.addEventListener('DOMContentLoaded', () => {
playerMove()
reset.addEventListener('click', clearGame)
playAgainButton.addEventListener('click',generateGame)

})
