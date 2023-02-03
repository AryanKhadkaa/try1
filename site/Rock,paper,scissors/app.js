const compChoiceDisplay = document.getElementById("comp-choice")
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById("result")
const possibleChoice = document.querySelectorAll('button')

let userChoice
let compChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

  generateCompChoice()
  getResults()
}))

function generateCompChoice(){
  const randomNum = Math.floor(Math.random() * 3)+1
console.log(randomNum)
if (randomNum === 1)
compChoice = "Rock"

if(randomNum === 2)
compChoice = "Paper"

if(randomNum === 3)
compChoice= "Scissors"

compChoiceDisplay.innerHTML = compChoice
}


function getResults(){

if(compChoice === userChoice)
result = "It's a draw 0_0!"

if(compChoice==='Rock' && userChoice==='Paper')
result = "You Won:)"

if(compChoice === 'Paper' && userChoice==='Rock')
result = "You Lost:("

if(compChoice === 'Rock' && userChoice === 'Scissors')
result= "You Lost:("

if(compChoice==='Scissors' && userChoice === 'Rock')
result= "You Won:)"

if(compChoice==='Paper' && userChoice === 'Scissors')
result= "You Won:)"

if(compChoice==='Scissors' && userChoice === 'Paper')
result= "You Lost:("







resultDisplay.innerHTML = result;
}
