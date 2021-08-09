//1st dealer card - cant show
let d1ValTop = document.querySelector('.d1ValT')
let d1SuitTop = document.querySelector('.d1SuitT')
let d1Suit = document.querySelector('.d1Suit')
let d1ValBot = document.querySelector('.d1ValB')
let d1SuitBot = document.querySelector('.d1SuitB')

//2nd dealer card
let d2ValTop = document.querySelector('.d2ValT')
let d2SuitTop = document.querySelector('.d2SuitT')
let d2Suit = document.querySelector('.d2Suit')
let d2ValBot = document.querySelector('.d2ValB')
let d2SuitBot = document.querySelector('.d2SuitB')

//1st player card
let p1ValTop = document.querySelector('.p1ValT')
let p1SuitTop = document.querySelector('.p1SuitT')
let p1Suit = document.querySelector('.p1Suit')
let p1ValBot = document.querySelector('.p1ValB')
let p1SuitBot = document.querySelector('.p1SuitB')

//2nd player card
let p2ValTop = document.querySelector('.p2ValT')
let p2SuitTop = document.querySelector('.p2SuitT')
let p2Suit = document.querySelector('.p2Suit')
let p2ValBot = document.querySelector('.p2ValB')
let p2SuitBot = document.querySelector('.p2SuitB')

let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
let suits = ['♣','♥', '♠','◆']
let cardDeck = []
let deckBtn = document.querySelector('#deckBtn')

let player = {
    name: "Per",
    chips: 1000
}
let sum = 0

function createDeck(){
  let numOfDecks = document.querySelector("#howManyDecks").value
  for(let i = 1; i <= numOfDecks;i++){
    values.forEach(val => {
    suits.forEach(suit => {
      let card = {
        value: val,
        suit: suit
      }
      cardDeck.push(card)
    })
  })
  }
  console.log(cardDeck.length)
  shuffleTheDeck(cardDeck)
}

let shuffledDeck = []
function shuffleTheDeck(cardDeck){
  while(cardDeck.length > 0){
    let randomIndex = Math.floor(Math.random() * (cardDeck.length - 1))
    shuffledDeck.push(cardDeck[randomIndex])
    cardDeck.splice(randomIndex, 1)
  }
  console.log(shuffledDeck.length)
  let stopCard = Math.round(shuffledDeck.length * .80)
  console.log(stopCard)
}
deckBtn.addEventListener('click', createDeck)
