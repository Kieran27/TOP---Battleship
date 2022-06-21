# Battleship

##### Live site
https://kieran27.github.io/TOP---Battleship/
##### Repo
https://github.com/Kieran27/TOP---Battleship

## About

This is a recreation of the classic game battleship. It is built with vanilla javascript and tested with the Jest framework.

### What I Learned

This project was an introduction to testing for me. I used the Jest framework to write my test and attempted to test the logic of my application but not the UI. Testing felt unintuitive to me during the project but gradually felt slightly more natural as the game developed. It was helpful in assuring that the game's logic still functioned as changes, especially during the UI development was occurring.

Aside from that, the project was difficult for me initially in understanding how to represent the game state within some sort of data. It was an interesting challenge in not only placing ships but understanding how to write necessary checks to see if the ship placement was valid or not. Representing the gameboard via a two dimensional array was helpful in rendering the UI, as I only had to associate the board with the array and render UI changes according to the game board array.

This project was also my first foray into the drag and drop API. The basics were simple enough but I ran into a lot of frustrating issues with the functionality and found some of the listeners unintuitive (preventing the default action on dragdrop and dragenter for example.) The functionality also makes for a pretty poor experience on mobile devices.

Making my code into modules and storing key data such as ships and gameboards into objects and classes was a massive asset during this project as well as separating the application logic from the UI also lead to a much easier time correctly rendering the UI to represent the gameboard array.

### What I would do differently

I'm fairly satisfied with the current state of the project. I would like to continue my understanding and practice of writing tests and come back to this project to compare the quality of the tests I had written then to the ones I can hopefully write now.
