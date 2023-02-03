const cardArray = [

    {
        name:'fries',
        img:'img/fries.png',

    },
    {
        name:'cheesebuger',
        img:'img/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'img/hotdog.png',

    },
    {
        name:'ice-cream',
        img:'img/ice-cream.png',

    },
    {
        name:'milkshake',
        img:'img/milkshake.png',

    },
    {
        name:'pizza',
        img:'img/pizza.png',

    },
    {
        name:'fries',
        img:'img/fries.png',

    },
    {
        name:'cheesebuger',
        img:'img/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'img/hotdog.png',

    },
    {
        name:'ice-cream',
        img:'img/ice-cream.png',

    },
    {
        name:'milkshake',
        img:'img/milkshake.png',

    },
    {
        name:'pizza',
        img:'img/pizza.png',

    },

]
//console.log(cardArray)
const sort= cardArray.sort(() => 0.5 - Math.random())
//console.log(sort)
const grid= document.querySelector("#grid")
//console.log(grid)

let cardPicked=[]
let cardPickedIds=[]
const cardsWon= []

function createBoard(){
for(let i=0; i<cardArray.length;i++){
   const card= document.createElement("img")
    card.setAttribute('src','img/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipcard)
 
  //console.log(card,i)
   grid.appendChild(card)
  
} 
}createBoard()


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const firstOptId=cardPickedIds[0]
    const secondOptId=cardPickedIds[1]
    //console.log(cards)
    console.log("check for match")

if(firstOptId == secondOptId)
{
    cards[firstOptId].setAttribute('src','img/blank.png')
    cards[secondOptId].setAttribute('src','img/blank.png')
    alert("You have clicked the same image:(")
}
 else if(cardPicked[0] ==  cardPicked[1])
   {
    alert('Found a match :)')
    cards[firstOptId].setAttribute('src','img/white.png')
    cards[secondOptId].setAttribute('src','img/white.png')
    cards[firstOptId].removeEventListener('click',flipcard)
    cards[secondOptId].removeEventListener('click',flipcard)
    cardsWon.push(cardPicked)
   
  }
else
  {
    cards[firstOptId].setAttribute('src','img/blank.png')
    cards[secondOptId].setAttribute('src','img/blank.png')
    alert("Sorry try again:(")
  
  }   

cardPicked=[]
cardPickedIds=[]

if(cardsWon.length === cardArray.length/2){
    document.querySelector('#result').innerHTML="CONGRATSSSS! You completed the game."
}
}
function flipcard(){
console.log(cardArray)
    const cardID = this.getAttribute('data-id')
    cardPicked.push(cardArray[cardID].name)
    cardPickedIds.push(cardID)

//console.log('clicked',cardID)
console.log(cardPicked)
console.log(cardPickedIds)
    this.setAttribute('src',cardArray[cardID].img)

     if(cardPicked.length === 2){
        setTimeout(checkMatch,500)
     }

}