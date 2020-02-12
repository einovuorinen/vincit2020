# Button game 

## General info
This is a multiplayer game played by clicking the button. Players start off with 20 points, and clicking costs 1 point.
There are 3 different prizes you can win:
  * 5 points for every 10th click
  * 40 points for every 100th click
  * 250 points for every 500th click
All players' clicks contribute to the same calculator

## Implementation
The site uses a simple ReactJS frontend with the button, reset possibility and messages about the game state.
Points are saved to users' localstorage.

Backend is done with npm and a mongoDB database where the clicks are stored. In the database there is one object with one 
field for the clicks and it gets updated via a PUT request. After the counter increases it calculates if the client wins something.
After that it sends a response with the remaining clicks needed for the next win and the prize that the client won. If they did not win
the prize value is 0.
