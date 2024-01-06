// Load flashcards from JSON file using fetch API
document.addEventListener("DOMContentLoaded", function () {
    fetch('flashcards.json')
        .then(response => response.json())
        .then(data => {
            // Store flashcards data in a variable
            const flashcards = data;
            let currentCardIndex = 0;

            // Function to display a flashcard based on the index
            const showCard = (index) => {
                // Update the count of questions
                const countQuestions = document.querySelector('.countQuestions span');
                countQuestions.innerText = `${index + 1}/${flashcards.length}`;

                // Display the question and answer of the current flashcard
                const currentFlashcard = flashcards[index];
                document.querySelector('.question').innerText = currentFlashcard.question;
                document.querySelector('.answer').innerText = currentFlashcard.answer;
            };

            // Function to show the next flashcard
            const showNextCard = () => {
                currentCardIndex = (currentCardIndex + 1) % flashcards.length;
                showCard(currentCardIndex);
            };

            // Function to show the previous flashcard
            const showPreviousCard = () => {
                currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
                showCard(currentCardIndex);
            };

            // Initial display of the first flashcard
            showCard(currentCardIndex);

            // Event listeners for next and previous arrows
            document.querySelector('.nextArrow').addEventListener('click', showNextCard);
            document.querySelector('.previousArrow').addEventListener('click', showPreviousCard);
        })
        .catch(error => console.error('Error loading flashcards:', error));
});

// Handle flashcards as HTML elements
document.addEventListener("DOMContentLoaded", function () {
    // Get all flashcard sections
    const flashcards = document.querySelectorAll('.first_card, .second_card, .third_card, .fourth_card, .fifth_card, .sixth_card, .seventh_card, .eighth_card, .nineth_card, .tenth_card');
    let currentCardIndex = 0;

    // Function to display a flashcard based on the index
    const showCard = (index) => {
        // Show or hide each flashcard section based on the index
        flashcards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });

        // Update the count of questions
        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/10`;
    };

    // Function to show the next flashcard
    const showNextCard = () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        showCard(currentCardIndex);
    };

    // Function to show the previous flashcard
    const showPreviousCard = () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        showCard(currentCardIndex);
    };

    // Event listeners for next and previous arrows
    document.querySelector('.nextArrow').addEventListener('click', showNextCard);
    document.querySelector('.previousArrow').addEventListener('click', showPreviousCard);
});

// Handle flashcards as an array
document.addEventListener("DOMContentLoaded", function () {
    // Array to store flashcards
    const flashcards = [];
    let currentCardIndex = 0;

    // Function to display a flashcard based on the index
    const showCard = (index) => {
        // Update the count of questions
        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/${flashcards.length}`;

        // Display the question and answer of the current flashcard
        const currentFlashcard = flashcards[index];
        document.querySelector('.question').innerText = currentFlashcard.question;
        document.querySelector('.answer').innerText = currentFlashcard.answer;
    };

    // Function to show the next flashcard
    const showNextCard = () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        showCard(currentCardIndex);
    };

    // Function to show the previous flashcard
    const showPreviousCard = () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        showCard(currentCardIndex);
    };

    // Function to add a new flashcard
    const addFlashcard = () => {
        // Get input values for question and answer
        const questionInput = document.getElementById('question').value;
        const answerInput = document.getElementById('answer').value;

        // Check if both question and answer are provided
        if (questionInput && answerInput) {
            // Create a new flashcard object
            const newFlashcard = { question: questionInput, answer: answerInput };

            // Add the new flashcard to the array
            flashcards.push(newFlashcard);

            // Save flashcards in JSON format (you can store this in a database or local storage)
            const flashcardsJSON = JSON.stringify(flashcards);
            // You can send this JSON data to a server or store it locally as needed

            // Clear input fields
            document.getElementById('question').value = '';
            document.getElementById('answer').value = '';

            // Display the newly added flashcard
            currentCardIndex = flashcards.length - 1;
            showCard(currentCardIndex);
        }
    };
    document.addEventListener("DOMContentLoaded", function () {
        let flashcards = [];
        let currentCardIndex = 0;
    
        const showCard = (index) => {
            const countQuestions = document.querySelector('.countQuestions span');
            countQuestions.innerText = `${index + 1}/${flashcards.length}`;
    
            const currentFlashcard = flashcards[index];
            document.querySelector('.question').innerText = currentFlashcard.question;
            document.querySelector('.answer').innerText = currentFlashcard.answer;
    
            // Clear user's previous answer
            document.getElementById('userAnswer').value = '';
            
        };
    
        const checkAnswer = () => {
            const userAnswer = document.getElementById('userAnswer').value.toLowerCase();
            const correctAnswer = flashcards[currentCardIndex].answer.toLowerCase();
    
            if (userAnswer === correctAnswer) {
                alert("Correct!");
            } else {
                alert("Incorrect! The correct answer is: " + correctAnswer);
            }
        };
    
        const showNextCard = () => {
            if (currentCardIndex < flashcards.length - 1) {
                checkAnswer(); // Check the user's answer before moving to the next card
                currentCardIndex++;
                showCard(currentCardIndex);
            }
        };
    
        const showPreviousCard = () => {
            if (currentCardIndex > 0) {
                currentCardIndex--;
                showCard(currentCardIndex);
            }
        };
    
        document.querySelector('.checkAnswer').addEventListener('click', checkAnswer);
        document.querySelector('.nextArrow').addEventListener('click', showNextCard);
        document.querySelector('.previousArrow').addEventListener('click', showPreviousCard);
    
        fetch('flashcards.json')
            .then(response => response.json())
            .then(data => {
                flashcards = data;
                showCard(currentCardIndex);
            })
            .catch(error => console.error('Error loading flashcards:', error));
    });
    

    // Initial display of the first flashcard
    showCard(currentCardIndex);

    // Event listeners for next and previous arrows
    document.querySelector('.nextArrow').addEventListener('click', showNextCard);
    document.querySelector('.previousArrow').addEventListener('click', showPreviousCard);

    // Expose addFlashcard function globally for the onclick attribute in HTML
    window.addFlashcard = addFlashcard;
});

document.addEventListener("DOMContentLoaded", function () {
    const flipCardContainer = document.querySelector('.flip-card-container');
    const flipCardInner = document.querySelector('.flip-card-inner');
    const viewAnswerButton = document.querySelector('.viewA');

    let isFlipped = false;

    // Function to flip the card
    const flipCard = () => {
        isFlipped = !isFlipped;

        // Add a delay (in milliseconds) before playing the flip sound
        const delayBeforeFlipSound = 500; // Adjust the delay as needed
        setTimeout(() => {
            flipCardInner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
            playFlipSound(); // Call playFlipSound after the delay
        }, delayBeforeFlipSound);
    };

    // Event listener for the "view answer" button
    viewAnswerButton.addEventListener('click', flipCard);

    // Rest of your code...

    function playFlipSound() {
        let flipSound = document.getElementById('flipSound');
        flipSound.play();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let flashcards = [];
    let currentCardIndex = 0;

    const showCard = (index) => {
        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/${flashcards.length}`;

        const currentFlashcard = flashcards[index];
        document.querySelector('.question').innerText = currentFlashcard.question;
        document.querySelector('.answer').innerText = currentFlashcard.answer;

        // Clear user's previous answer
        document.getElementById('userAnswer').value = '';
    };
    
    const checkAnswer = () => {
        const userAnswer = document.getElementById('userAnswer').value.toLowerCase();
        const correctAnswer = flashcards[currentCardIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + correctAnswer);
        }
    };

    const readQuestion = () => {
        const questionText = document.querySelector('.question').innerText;
        const answerText = document.querySelector('.answer').innerText;

        const speechSynthesis = window.speechSynthesis;
        const speechUtterance = new SpeechSynthesisUtterance(questionText, answerText);
        speechSynthesis.speak(speechUtterance);
    };

    document.querySelector('.checkAnswer').addEventListener('click', checkAnswer);
    document.querySelector('.readQuestion').addEventListener('click', readQuestion);


    const readAnswer = () => {
        const answerText = document.querySelector('.answer').innerText;
    
        const speechSynthesis = window.speechSynthesis;
        const speechUtterance = new SpeechSynthesisUtterance(answerText);
        speechSynthesis.speak(speechUtterance);
    };
    
    // Add event listener for reading the answer
    document.querySelector('.readAnswer').addEventListener('click', readAnswer);
    

    fetch('flashcards.json')
        .then(response => response.json())
        .then(data => {
            flashcards = data;
            showCard(currentCardIndex);
        })
        .catch(error => console.error('Error loading flashcards:', error));
});

function playFlipSound() {
    let flipSound = document.getElementById('flipSound');
    flipSound.play();
}

document.addEventListener("DOMContentLoaded", function () {
    let userFlashcards = []; // Store user-generated flashcards separately
    let currentCardIndex = 0;

    const showCard = (index) => {
        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/${userFlashcards.length}`;

        const currentFlashcard = userFlashcards[index];
        document.querySelector('.question').innerText = currentFlashcard.question;
        document.querySelector('.answer').innerText = currentFlashcard.answer;

        // Clear user's previous answer
        document.getElementById('userAnswer').value = '';
    };

    // Function to add a new user-generated flashcard
    window.addFlashcard = () => {
        const questionInput = document.getElementById('question').value;
        const answerInput = document.getElementById('answer').value;

        if (questionInput && answerInput) {
            const newFlashcard = { question: questionInput, answer: answerInput };
            userFlashcards.push(newFlashcard);

            document.getElementById('question').value = '';
            document.getElementById('answer').value = '';

            currentCardIndex = userFlashcards.length - 1;
            showCard(currentCardIndex);
        } else {
            alert('Please enter both question and answer.');
        }
    };

    // Function to save user-generated flashcards
    window.saveFlashcards = () => {
        if (userFlashcards.length > 0) {
            const content = userFlashcards.map(flashcard => `${flashcard.question}\n${flashcard.answer}\n`).join('\n');
            const blob = new Blob([content], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'user_flashcards.txt';
            a.click();
        } else {
            alert('No user-generated flashcards to save. Add flashcards first.');
        }
    };

    // Function to update user-generated flashcards
    const updateUserFlashcards = () => {
        const flashcardsContainer = document.getElementById('flashcards-container');
        flashcardsContainer.innerHTML = '';

        for (let i = 0; i < userFlashcards.length; i++) {
            const flashcard = userFlashcards[i];
            const card = document.createElement('div');
            card.classList.add('flashcard');
            card.innerHTML = `<strong>Question:</strong> ${flashcard.question}<br><strong>Answer:</strong> ${flashcard.answer}`;
            flashcardsContainer.appendChild(card);
        }
    };

    // Initial display of the first user-generated flashcard
    showCard(currentCardIndex);

    // Event listeners for next and previous arrows
    document.querySelector('.nextArrow').addEventListener('click', () => showCard(++currentCardIndex % userFlashcards.length));
    document.querySelector('.previousArrow').addEventListener('click', () => showCard((--currentCardIndex + userFlashcards.length) % userFlashcards.length));

    // Expose addFlashcard function globally for the onclick attribute in HTML
    window.addFlashcard = addFlashcard;
});
