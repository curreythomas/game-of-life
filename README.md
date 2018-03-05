# React-of-Life

React-of-Life is a game created with react based on British Mathematician John H. Conway's Game of Life. This game allows you to generate your "World" with rows and columns to see a wonderful evolution of "life" and hopefully cool patterns!

> ## Contents
>
> 1. [Prerequisites](#Prerequisites)
> 1. [Getting Started](#Getting-Started)
> 1. [Technologies used](#Technologies-Used)
> 1. [Challenge Requirements](#Challenge-Requirements)
> 1. [How to use the App](#How-to-use-the-App)
> 1. [Future Improvements](#Future-Improvements)
> 1. [General Remarks](#General-Remarks)

## Prerequisites

_**Node.js**_ - These instructions assume you have Node >= 6 on your local machine

To check your version of node, run `node -v` in your terminal.

Link to download: [Node](https://nodejs.org/en/)

_**yarn-cli**_ - This project uses yarn to install dependencies

Download yarn: `npm install -g yarn`

## Getting Started

Navigate to the repo here: [React-of-Life](https://github.com/curreythomas/react-of-life.git)

Clone the repo:

`$ git clone https://github.com/curreythomas/react-of-life.git`

Install Dependencies:

```#!/bin/bash
  cd react-of-life
  yarn
```

Start up the Server:

`$ yarn start`

If there are any issues, the dependencies used in this app are:

> "ramda": "^0.25.0",
> "react": "^16.2.0",
> "react-dom": "^16.2.0",
> "react-scripts": "1.1.1"

You can install these dependencies individually using:

`$ yarn add {dependency}`

## Technologies used

This app was created with react using create-react app. Documentation is readily available on this Javascript library. Comments throughout the code should help understand what each function or component is doing. If my comments do not help you understand what is happening check out the [react docs](https://reactjs.org/docs/hello-world.html) or reach out to me @curreythomas.

A functional library used in this app is Ramda. Ramda uses pure functions to ensure immutibility and side-effect free code. Functions also automatically curry data, allowing the ability to create new larger functions out of multiple small functions by not supplying all of the parameters until the end. [Ramda documentation](http://ramdajs.com/) can be tricky to understand because it is written in a functional way. There are many videos on youtube that help explain ramda functions.

Throughout the code you will see boilerplate like this image below.

* Line 1 is importing the React library and destructuring Component from react.
* Line 2-4 is importing child components into the parent App component.
* Line 5 is destructuring functions from the ramda library.
* Line 8 is creating an ES6 class and extending that to the React.Component that I destructured on line 1.
* Line 9 is calling constructor to create an object in the component.
* Line 10 calls super to access the keyword this and call functions within the constructor.

![react-component](https://github.com/curreythomas/game-of-life/blob/master/public/react-component.png)

At the end of each component I export the component to pass to another component. That app component is passed to the index.js file where it is rendered through ReactDOM.render. The CSS for the entire application is also brought into the index.js file and passed down through the App component from here.

## Challenge Requirements - How I solved it

* Create a game that follows John Conway's game of life rules.
* The app should gather the size of the grid from the user. - See Inputs.js
* It should have a start button. - See Buttons.js
* The app should dynamically update the grid on each game tick. - See App.js

The rules of the game are:

* Every cell interacts with its 8 neighbors that are horizontally, vertically, and diagonally adjacent.

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
1. Any live cell with two or three live neighbours lives on to the next generation.
1. Any live cell with more than three live neighbours dies, as if by overpopulation.
1. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## How to use the App

The app statically generates a 30 rows and 40 columns. You may change the size of the grid by entering your own values or using the arrow buttons on the input when hovered. Please enter a value between 10 and 50 for each. For performance sake these values are the minimum and maximum. Click the 'Create Grid' button to generate your grid.

The app will seed the grid as soon as it is rendered. Press the play button to start the game. You don't need to do anything else except watch if you would like to. If you feel so inclined you may stop the game at any time by pressing the stop button and checking out some cool shapes.

If you press the reset button you will clear the grid entirely and will need to seed the grid before the app will start. You may press the seed button at any time to re-seed the grid with a new grid full of life.

Finally you may click on any cell and toggle it from alive to dead and vice versa. A fun way to play around with this is to stop the App from running, reset the app to clear the board and then checkout some patterns on [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns). See which one is your favorite!

## Future Improvements

* The app currently continues running even after all life and death has occured and all rules have been satisfied. Need to set a timeout on the run function.

* Create the run function in a more functional way. Currently hard to read and probably not the most performant.

* Create tests for each piece of the app; unit and end to end Tests.

* Implement a speed toggler to let the user change the speed of the app. With this, make the app run faster.

* Separate the logic and engine of the game from the UI. This is what tripped me up early on in the challenge. Trying to do this.

## General Remarks

This coding challenge proved to be a fun learning experience in many ways. Looking back, I would have planned out my app much better by breaking down the pieces earlier instead of trying to build the app top to bottom in one file. With that said, I did take the approach of getting it work and going back to refactor to make things easier to read and more concise.
