document.addEventListener("DOMContentLoaded", function () {
    const flashcards = document.querySelectorAll('.first_card, .second_card, .third_card, .fourth_card, .fifth_card, .sixth_card, .seventh_card, .eighth_card, .nineth_card, .tenth_card');
    let currentCardIndex = 0;

    const showCard = (index) => {
        flashcards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });

        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/10`;
    };

    const showNextCard = () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        showCard(currentCardIndex);
    };

    const showPreviousCard = () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        showCard(currentCardIndex);
    };

    const addFlashcard = () => {
        const questionInput = document.getElementById('question');
        const answerInput = document.getElementById('answer');

        const newCard = document.querySelector(`.flashcards .${flashcards[currentCardIndex].classList[0]}`).cloneNode(true);
        newCard.querySelector('.question').innerText = questionInput.value;
        newCard.querySelector('.answer').innerText = answerInput.value;

        document.querySelector('.flashcards').appendChild(newCard);

        questionInput.value = '';
        answerInput.value = '';
    };

    showCard(currentCardIndex);

    document.querySelector('.nextArrow').addEventListener('click', showNextCard);
    document.querySelector('.previousArrow').addEventListener('click', showPreviousCard);

    window.addFlashcard = addFlashcard;
});




document.addEventListener("DOMContentLoaded", function () {
    const flashcards = []; // Array to store flashcards
    let currentCardIndex = 0;

    const showCard = (index) => {
        const countQuestions = document.querySelector('.countQuestions span');
        countQuestions.innerText = `${index + 1}/${flashcards.length}`;

        // Display the flashcard content
        const currentFlashcard = flashcards[index];
        document.querySelector('.question').innerText = currentFlashcard.question;
        document.querySelector('.answer').innerText = currentFlashcard.answer;
    };

    const showNextCard = () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        showCard(currentCardIndex);
    };

    const showPreviousCard = () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        showCard(currentCardIndex);
    };

    const addFlashcard = () => {
        const questionInput = document.getElementById('question').value;
        const answerInput = document.getElementById('answer').value;

        if (questionInput && answerInput) {
            const newFlashcard = { question: questionInput, answer: answerInput };
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

    // Initial display
    showCard(currentCardIndex);

    // Event listeners
    document.querySelector('.nextArrow').addEventListener('click', showNextCard);
    document.querySelector('.previousArrow').addEventListener('click', showPreviousCard);

    // Expose addFlashcard function globally for the onclick attribute in HTML
    window.addFlashcard = addFlashcard;
});





