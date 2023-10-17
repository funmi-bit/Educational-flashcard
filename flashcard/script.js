let isFlipped = false;

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    const front = document.getElementByclassName('front');
    const back = document.getElementById('back');
    const answer = document.getElementsByClassName('answer');
    const input = document.getElementsByClassName('input');

    if (input === answer){
        if (isFlipped) {
            flashcard.style.transform ='rotateY(80deg)';
        } 
    }
    else {
        flashcard.style.transform = 'rotateY(180deg)';
    }
   

    isFlipped = !isFlipped;
}
