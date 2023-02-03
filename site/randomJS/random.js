const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const timeUp = document.querySelector("#time-up")

let result = 0
let hitPosition
let remainingTime=60
let timerID=null

function randomSquare(){

   squares.forEach(square=>{
   square.classList.remove('mole')
   })

 let randomPosition =squares[Math.floor(Math.random()* 9)]
 //console.log(randomPosition)
 randomPosition.classList.add('mole')

 hitPosition = randomPosition.id
 //console.log(hitPosition)
} 
randomSquare()

squares.forEach(square => {
    square.addEventListener('click', () => {
 if(square.id == hitPosition) {
    result++
    //console.log(result)
    score.innerHTML = result
    hitPosition = null
}
})})

 function moveMole(){
 
   timerID=setInterval(randomSquare, 500)
}moveMole()

 function countDown(){
 
   remainingTime--
   timeLeft.textContent = remainingTime

   if(remainingTime == 0){
    clearInterval(countDownTimerId)
    clearInterval(timerID)
   timeUp.innerHTML="Time's Up! Your final score is "+result
   }
   
 }
 let countDownTimerId =  setInterval(countDown,1000)
