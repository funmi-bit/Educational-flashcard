class FlashcardApp {
    constructor() {
        // Initialize flashcard data and current card index
        this.flashcards = [];
        this.currentCardIndex = 0;

        // Initialize the flipped state
        this.isFlipped = false;

        // Initialize event listeners and fetch flashcards
        this.initializeEventListeners();
        this.fetchFlashcards();
        this.showCard(this.currentCardIndex);
    }

    initializeEventListeners() {
        // Add event listeners for various user interactions
        document.querySelector('.nextArrow').addEventListener('click', () => this.showNextCard());
        document.querySelector('.previousArrow').addEventListener('click', () => this.showPreviousCard());
        document.querySelector('.checkAnswer').addEventListener('click', () => this.checkAnswer());
        document.querySelector('.readQuestion').addEventListener('click', () => this.readQuestion());
        document.querySelector('.readAnswer').addEventListener('click', () => this.readAnswer());
        document.querySelector('.viewA').addEventListener('click', () => this.playFlipSound());
        document.getElementById('userAnswer').addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.checkAnswer();
            }
        });
    }

    fetchFlashcards() {
        // Fetch flashcards from the JSON file
        fetch('flashcards.json')
            .then(response => response.json())
            .then(data => {
                this.flashcards = data;
            })
            .catch(error => console.error('Error loading flashcards:', error));
    }

    showCard(index) {
        // Update question count first
        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/${this.flashcards.length}`;

        // Display the current flashcard
        const currentFlashcard = this.flashcards[index];
        document.querySelector('.question').innerText = currentFlashcard.question;
        document.querySelector('.answer').innerText = currentFlashcard.answer;

        // Clear user's previous answer
        document.getElementById('userAnswer').value = '';
    }

    showNextCard() {
        // Show the next flashcard and check the user's answer
        if (this.currentCardIndex < this.flashcards.length - 1) {
            this.currentCardIndex++;
            this.showCard(this.currentCardIndex);
            this.isFlipped = false; // Reset flipped state when showing the next card
            this.updateCardFlip();
        }
    }

    showPreviousCard() {
        // Show the previous flashcard
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.showCard(this.currentCardIndex);
            this.isFlipped = false; // Reset flipped state when showing the previous card
            this.updateCardFlip();
        }
    }

    checkAnswer() {
        // Check if the user's answer is correct and provide feedback
        const userAnswer = document.getElementById('userAnswer').value.toLowerCase();
        const correctAnswer = this.flashcards[this.currentCardIndex].answer.toLowerCase();
        const feedbackMessage = document.querySelector('.feedbackMessage');

        if (userAnswer === correctAnswer) {
            feedbackMessage.innerText = "Correct!";
            feedbackMessage.style.color = "green";
        } else {
            feedbackMessage.innerText = "Incorrect! The correct answer is: " + correctAnswer;
            feedbackMessage.style.color = "red";
        }
    }

    readQuestion() {
        // Read aloud the current question
        const questionText = document.querySelector('.question').innerText;
        this.speakText(questionText);
    }

    readAnswer() {
        // Read aloud the current answer
        const answerText = document.querySelector('.answer').innerText;
        this.speakText(answerText);
    }

    speakText(text) {
        // Use speech synthesis to read the provided text aloud
        const speechSynthesis = window.speechSynthesis;
        const speechUtterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speechUtterance);
    }

    playFlipSound() {
        // Play the flip sound when viewing the answer
        let flipSound = document.getElementById('flipSound');
        flipSound.play();
    
        // Toggle the flipped state after a delay (e.g., 500 milliseconds)
        const delayBeforeFlip = 500; // Adjust the delay as needed
    
        setTimeout(() => {
            // Toggle the flipped state
            this.isFlipped = !this.isFlipped;
            this.updateCardFlip();
        }, delayBeforeFlip);
    }

    updateCardFlip() {
        // Update the flip animation based on the flipped state
        const flipCardInner = document.querySelector('.flip-card-inner');
        flipCardInner.style.transform = this.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    }
}

// Instantiate the FlashcardApp class when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    const flashcardApp = new FlashcardApp();

    // Assuming you have an 'enterButton', add an event listener for Enter key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            flashcardApp.playFlipSound();
        }
    });
});
