
/* Citation code originally modified from:
     https://medium.com/javascript-in-plain-english/writing-a-slider-in-
     javascript-learning-web-development-in-practice-ea4862dce85a
 */  


let cardIndex = 1; //card immediately after starting card
showCards(cardIndex);


function nextCard() {
    showCards(cardIndex += 1);  //moves index to right card
}
function previousCard() {
    showCards(cardIndex -= 1); //moves index to left card
}
function currentCard(cur) {  //sets current card
    showCards(cardIndex = cur); 
}

function showCards(n) {
    let i;
    let cards = document.getElementsByClassName("card");  //list of cards
    
    if (n > cards.length) {  //if past the last card, set index at 1
      cardIndex = 1
    }
    if (n < 1) {  //if to the left of the beginning card, set index to wrap around to the last card
        cardIndex = cards.length
    }

    for (let card of cards) {
        card.style.display = "none";  //hide all cards
    }
   
    cards[cardIndex - 1].style.display = "block";   //show current card
}