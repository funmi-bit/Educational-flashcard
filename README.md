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


