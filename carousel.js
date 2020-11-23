
/* Citation code originally modified from:
     https://medium.com/javascript-in-plain-english/writing-a-slider-in-
     javascript-learning-web-development-in-practice-ea4862dce85a
 */  
document.addEventListener('DOMContentLoaded', carousel);

function carousel() {

    var autoScroll = true; //auto scroll unless user manually clicks thru carousel

    let cardIndex = 1; //card immediately after starting card
    showCards(cardIndex);

    document.getElementById("leftCarousel").addEventListener("click", function() {
        autoScroll = false; //turn off auto scroll
        leftCard(); //initialize left button
    });

    document.getElementById("rightCarousel").addEventListener("click", function() {
        autoScroll = false; //turn off auto scroll
        rightCard(); //initialize right button
    });

    //auto-scroll to the right every 5 sec, but only until user clicks left or right
    setInterval(function() {
        if (autoScroll) {rightCard()};
    }, 5000);


    function rightCard() {
        showCards(cardIndex += 1);  //moves index to right card
    }
    function leftCard() {
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


}



