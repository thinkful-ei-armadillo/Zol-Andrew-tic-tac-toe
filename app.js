'use strict';
/* global $ */
const state = {
  clickTracker: {
    '0': null,
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null
  },
  isO: false    
};

const winningPos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// State modification functions
function modifyState(){
    // Change the state object given the user input
    // Change the user value from either X to O or O to X
    // Check if there is a winning possibility
    // Call the render function
}


// Render functions

function generateHTMLString(state){
    // 
}

function renderGame(){
    // Render HTML based on the state object
}

// Event Listeners

function handleUserClick(){
    // Listen for a user click
    // If the element clicked has not been clicked, else...
    // Call change state function modifyState()

}

function main(){

}

$(main);