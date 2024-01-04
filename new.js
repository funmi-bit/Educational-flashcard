
function updateFlashcards() {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = '';

    flashcards.forEach((flashcard, index) => {
        const card = document.createElement('div');
        card.classList.add('flashcard');
        card.innerHTML = `<div class="card-inner">
            <div class="card-front"><strong>Question:</strong> ${flashcard.question}</div>
            <div class="card-back"><strong>Answer:</strong> ${flashcard.answer}</div>
        </div>`;

        // Add a class to each card for styling purposes
        card.classList.add('flashcard');

        // Add event listener for flipping the card
        card.addEventListener('click', () => flipCard(card));

        flashcardsContainer.appendChild(card);
    });
}


function viewFlashcards() {
    // Show the first flashcard by de
    fault
    if (flashcards.length > 0) {
        showFlashcard(0);
    } else {
        alert('No flashcards to view. Add flashcards first.');
    }
}
viewFlashcards();

function showFlashcard(index) {
    // Display the flashcard at the given index
    const flashcard = flashcards[index];
    const flashcardContainer = document.getElementById('flashcards-container');
    flashcardContainer.innerHTML = `<div class="flashcard">
        <div class="card-inner">
            <div class="card-front"><strong>Question:</strong> ${flashcard.question}</div>
            <div class="card-back"><strong>Answer:</strong> ${flashcard.answer}</div>
        </div>
    </div>`;
    updateFlashcards();
}

function flipCard(card) {
    // Toggle the 'flipped' class to flip the card
    card.classList.toggle('flipped');
}