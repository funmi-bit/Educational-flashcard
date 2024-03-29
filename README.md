# Educational-flashcard
This is the begining of my flashcard application.
its a basic application that only flips when user hover around the flashcard but doesn't work when view answer button is clicked.

![flashcard](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/ec2f3dc9-af97-40e2-96c6-a867a6533fdc)

https://github.com/funmi-bit/Educational-flashcard/assets/89481955/1453132b-96ea-4989-b8e9-160e5885e11b 


This application is modified to be an interactive flashcard tool where users can create, view, and interact with flashcards. Users can input questions and answers, add flashcards, and navigate through them using arrow buttons. The double-click functionality reveals the answer. The "Create Flashcard" page allows users to input questions and answers, add flashcards, and view their progress.


https://github.com/funmi-bit/Educational-flashcard/assets/89481955/1e92322a-ea23-4a10-ac97-fb7433216680

when a user add anew flashcard, a message shows up to notify that a flashcard has been added and also count the number of flashcard that is being added. but when add flashcard button is clicked without adding any question and answer in the box, a pop up message shows up telling the user to add flashcard.
To enable adding flashcards, I created a function `addFlashcard()` that retrieves user input, creates a flashcard object, and adds it to an array. The "View Answer" button triggers the `flipCard()` function, toggling card visibility by rotating the card element. These functions are connected to HTML elements with event listeners, providing an interactive experience where users can add flashcards and reveal answers through card flipping.
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/0fb463b5-17bc-404c-af8f-8cedb72d44bb

the video below shows "back to home page" link which enable users to go back to the home page.
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/7821d3c4-0e14-4cbe-bd72-52469923eb11

A new button is added"save flashcard"  This is a visual display of how save dflashcard button works
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/52aa9607-ba6a-46fe-a6c7-c4a9b19febc3

visual display of the modified background for save flashcard button
![image](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/d0557cc9-0f89-4b66-8c1a-4677824d02b3)

Visual display shows how share flashcard button works. the web share API is only supported by some browsers. the video below shows that the sharing function is not supported on firefox but supported on google chrome and opera browsers
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/ece98029-25cd-47bc-a0f7-7be8f54d01b7

The modified share flashcard button is showed below. the button is being tested on firefox and google chrome browsers to see the differences when share button is clicked on differeent browsers. when question and answer input box is empty, a message showed up telling a user to add flashcard first before sharing.
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/5fbe95fe-3bf2-4ae7-a558-bab831052dc2

This is a visual display of text to spech multimedia, where questions and answers can be read aloud when user clicks on volume image. also user can type their answer and see response on alert box. but it only works for question one.
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/14da0492-216e-4e05-a981-e29ca50e1e0d

Output shows sound on flipping flashcard when view answer button is clicked. also, when a mouse ointer points to the volume image, read aloud text shows up to show users that the image is meant to read text aloud
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/57ba11bb-0e8e-48cb-b243-07358ad12372

visual display below shows the scroll bar that is being added to "newFlashcard" page. enabling user to scroll through their generated question and ansswer. also, the scroll bar is placed at the right for a better visibility.
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/bcdc8f87-71e3-4545-bd72-4d1cba8ce1fb

visual display shows horizontal scroll bar being added to the page for a better visibility.
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/ab2c8dd3-3f48-455a-a666-60f699eae306

vidual display shows user ansering the questions and checks for correct answer by clicking on check answer button
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/1a43b1ba-e5ce-42c8-a57b-173682f740c2

In the Flashcard application, users start by seeing a clean, user-friendly interface displaying a question. They can listen to the question, type their answer, and click "Check Answer." Instant feedback is provided, indicating correctness or suggesting the correct answer. Navigation arrows allow users to move between flashcards. The app supports keyboard shortcuts for accessibility. Users can create, view, and save flashcards on a separate page. The sharing feature enables them to share flashcards, making it a comprehensive, interactive tool for learning and revising information in a personalized, accessible manner.the app also works in variety of browsers and devices whichserves as a responsive design to all users.

![image](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/42e7db31-714e-452a-a66f-ee5f61603703)
![image](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/8bc020ba-28f6-4328-b32a-a31a0b63cecc)
![image](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/39b77064-3e62-4330-ad03-bfd6dc71320c)
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/6b2f0e99-3131-4a7b-8484-27be3dffc232
![image](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/d4b2a4dc-aa9d-48ff-84ad-6a29c320de07)
![image](https://github.com/funmi-bit/Educational-flashcard/assets/89481955/7381c26b-a83d-4713-850e-e347f17960cb)
https://github.com/funmi-bit/Educational-flashcard/assets/89481955/06f10823-6d32-457f-9105-add776af810f






