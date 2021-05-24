# react-magic-trick

### Install the dependencies
`npm install`

### Run the project
`npm start`

## What does it do?
- Use the deck and pile system from API (https://deckofcardsapi.com)
- The deck id is stored in the localstorage
- The deck ID expires in 14 days
- The correct card is shown at the end
# Problem description
You are given the chance of demonstrating you front-end skills by creating a "mind-reading" magic trick!

The trick consists of arranging a deck of 21 cards into three piles of seven cards each, the user should be asked to pick a card and tell the pile on which the chosen card is contained. You should now rearrange the cards into three new piles, always keeping the pile that was appointed by the user in the middle of the other two. This process is repeated two more times (making a total of 3 rounds), after that, if the piles were correctly arranged in every round, the card that was picked by the user, in the beginning, will be placed in the middle of the deck (11th card).

Here are some resources explaining with more details how the trick works and the way it should be applied to be successful:

- [Picture based, step-by-step performance explanation](https://www.wikihow.com/Do-a-21-Card-Card-Trick)
- [Video explanation](https://www.youtube.com/watch?v=up0rWk_Q4tY&ab_channel=TearingLogic)

## Features
You should implement the application by considering the following features, sorted by importance:

- The users should be able to choose the pile that their card is contained in and be notified, at the end of the trick, about the card they have chosen;

- The application should be responsive and easy to interact with on smaller devices;

- Retrieve, at the first game, a deck to be used in the application from the Deck of Cards API, and cache this deck to be used while the user keeps restarting the trick;

- clearIntervalPossibility, by the end of the trick, to restart the application and play again.

 

## Bonus
Add animations to the interactions the user can perform on the page (click on the rows, displaying the chosen card at the end of the trick, etc.);

## Notes
You must implement the magic trick following these guidelines:

- You must use React;
- If possible, use React Hooks;
- You can use an ES6 or TypeScript transpiler if you prefer;
- You can use CSS precompilers, like SASS, PostCSS, Stylus or Less, again, if you prefer;
- It's nice to have a cool design;
- You must create a README file containing information about how to set up and run the application.

## Sharing your solution
After finishing your implementation, push the code to a private git repository (GitHub, BitBucket and GitLab offer private repositories in their free tier account) and grant access to the person who is taking care of your hiring process.

Important: For the evaluation, keep this in mind: you don't need to complete every single feature listed in this test. For example, your implementation can use a static deck of cards instead of fetching them from the API. But the less features you implement, the more you have to nail what you deliver. So, if you deliver just one feature, we expect it to be the most perfect implementation (structure, organization, testing, style, overall quality, etc.). The more features you deliver, the fewer details you have to add. It's your choice.
