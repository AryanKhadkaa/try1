const grid=document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 25
const boardWidth=560
const boardHeight=300
const ballDiameter = 20
let   xDirection = 2
let   yDirection = 2
var   score=0


let ballmovement

const userStart= [230,10]
let currentPosition= userStart

const ballStartPosition=[270,35]
let ballStart = ballStartPosition



class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,yAxis] 
        this.bottomRight = [xAxis + blockWidth,yAxis]
        this.topLeft = [xAxis,yAxis+blockHeight]
        this.topRight = [xAxis +blockWidth , yAxis+blockHeight]
    }
}

const blocks =[

    //1st row
     new Block(10,270),
     new Block(120,270),
     new Block(230,270),
     new Block(340,270),
     new Block(450,270),
    //2nd row 
     new Block(10,235),
     new Block(120,235),
     new Block(230,235),
     new Block(340,235),
     new Block(450,235),
   //3rdd row
     new Block(10,200),
     new Block(120,200),
     new Block(230,200),
     new Block(340,200),
     new Block(450,200)
    
]
 //console.log(blocks[2])



function addBlock(){

    for(let i=0;i<blocks.length;i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left=blocks[i].bottomLeft[0] + "px"
        block.style.bottom=blocks[i].bottomLeft[1] + "px"
      //  console.log(blocks[0].bottomRight[0])
        grid.appendChild(block)
    }
}
addBlock()
//creating the user block




const userBlock = document.createElement('div')
userBlock.classList.add('uBlock')
drawUser()
grid.appendChild(userBlock)

function drawUser(){
    userBlock.style.left =currentPosition[0]+'px' //or you can simply put "230px"
    userBlock.style.bottom = currentPosition[1]+'px'// or you can simply put  "10px"
    }

//move userBlock
function moveuBlock(e) {

switch(e.key){


    case 'ArrowLeft':
        if(currentPosition[0] > 10  ){
        currentPosition[0] -= 10
        drawUser()
        console.log(currentPosition)
        }
        break;
        

     case  'ArrowRight':
        if(currentPosition[0]< 450){
        currentPosition[0] +=10
        drawUser()
        }
        break;
    
     

}
}

document.addEventListener('keydown', moveuBlock)

//Creating/drawing Ball
function drawBall(){
    ball.style.left=ballStart[0]+'px'
    ball.style.bottom=ballStart[1]+'px'
    }

//add Ball to the parent node( grid) 
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//move ball
 
function moveBall(){
    ballStart[0] += xDirection
    ballStart[1] += yDirection
    drawBall()
    checkForCollision()
    
}
 ballmovement = setInterval(moveBall,30)



 function checkForCollision(){

//check for block collisins
for(let i=0; i<blocks.length; i++){

    if(
        (ballStart[0] > blocks[i].bottomLeft[0] && ballStart[0] < blocks[i].bottomRight[0]) &&
        ((ballStart[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballStart[1] < blocks[i].topLeft[1])
      )
      {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i,1)
            changeDirection()
            score++
            document.querySelector('.score').innerHTML= score
             
                if( blocks.length == 0){
            document.querySelector('.result').innerHTML="YOU WIN! :)"
            clearInterval(ballmovement)
            document.removeEventListener('keydown',moveuBlock)
            }
           } 
         }
        
//Wall Collision check
       if(
        ballStart[0] >= (boardWidth - ballDiameter) || 
        ballStart[0] <=0||
        ballStart[1] >= (boardHeight - ballDiameter)
        ) {
        console.log("collide")
        changeDirection()
       
    }

    //userBlock-Collision
     if(
         (ballStart[0] > currentPosition[0] &&  ballStart[0] < currentPosition[0] + blockWidth) &&
         (ballStart[1] > currentPosition[1] && ballStart[1] < currentPosition[1]+ blockHeight)
        )
     {
        changeDirection()
     }

     if(ballStart[1]<0) {
        clearInterval(ballmovement)
        document.removeEventListener('keydown',moveuBlock)
        document.querySelector('.result').textContent = "YOU LOST :("
     }
 }



 function changeDirection(){
if(xDirection == 2 && yDirection ==2){

    yDirection = -2
    return
}
if(xDirection == 2 && yDirection ==-2){
    xDirection = -2
    
    return
}
if(xDirection == -2 && yDirection ==-2){
   
    yDirection =  2
    return
}
if(xDirection == -2 && yDirection ==2){
    xDirection =  2
  
    return
}


}


