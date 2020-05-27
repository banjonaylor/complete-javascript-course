/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

//SETTER
// document.querySelector('#current-' + activePlayer).textContent = dice; //this textContent can only replace plain text
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //this lets you pass in html strings

//GETTER
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//interact with CSS
// document.querySelector('.dice').style.display = 'none'
// .style = method 
// .display = css property
// = none = css property value

//EVENTS need an EVENT LISTENER to watch our for them
//Events can only be processed once all functions have returned (i.e. execution stack is empty, back in the global context)
//Events are added to a message queue prior to processing
//Events get an Execution Context added on top of the Execution Stack

//Event Handler

// function btn () {
//     //Do something here
// }
// btn();

// document.querySelector('.btn-roll').addEventListener('click',btn); 
//this is a CALLBACK because the Event Listener calls the function, we don't call the function


//faster way to select BUT needs id
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

//you can also right an non-named one-off function here. This is an ANONYMOUS function
document.querySelector('.btn-roll').addEventListener('click',function () {
    if (gamePlaying) {
        //1. get a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //update the round score if the roll number !== 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            //next Player
            nextPlayer();
        } 
    }
}); 
//NB lots of types of event are available

//player clicks hold button
document.querySelector('.btn-hold').addEventListener('click',function () {
    if (gamePlaying) {
        //Add current score to global score
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            // document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //next Player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer () {
    //next player
    activePlayer === 0 ?  activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //hide the dice again
    document.querySelector('.dice').style.display = 'none'
};

function init () {
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};


// //BACKUP OF WORKING SIMPLE GAME NO MODS

// /*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

// */

// var scores, roundScore, activePlayer, gamePlaying;

// init();

// // dice = Math.floor(Math.random() * 6) + 1;
// // console.log(dice);

// //SETTER
// // document.querySelector('#current-' + activePlayer).textContent = dice; //this textContent can only replace plain text
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //this lets you pass in html strings

// //GETTER
// // var x = document.querySelector('#score-0').textContent;
// // console.log(x);

// //interact with CSS
// // document.querySelector('.dice').style.display = 'none'
// // .style = method 
// // .display = css property
// // = none = css property value

// //EVENTS need an EVENT LISTENER to watch our for them
// //Events can only be processed once all functions have returned (i.e. execution stack is empty, back in the global context)
// //Events are added to a message queue prior to processing
// //Events get an Execution Context added on top of the Execution Stack

// //Event Handler

// // function btn () {
// //     //Do something here
// // }
// // btn();

// // document.querySelector('.btn-roll').addEventListener('click',btn); 
// //this is a CALLBACK because the Event Listener calls the function, we don't call the function


// //faster way to select BUT needs id
// // document.getElementById('score-0').textContent = '0';
// // document.getElementById('score-1').textContent = '0';
// // document.getElementById('current-0').textContent = '0';
// // document.getElementById('current-1').textContent = '0';

// //you can also right an non-named one-off function here. This is an ANONYMOUS function
// document.querySelector('.btn-roll').addEventListener('click',function () {
//     if (gamePlaying) {
//         //1. get a random number
//         var dice = Math.floor(Math.random() * 6) + 1;
//         //display the result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';
//         //update the round score if the roll number !== 1
//         if (dice !== 1) {
//             //Add score
//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore; 
//         } else {
//             //next Player
//             nextPlayer();
//         } 
//     }
// }); 
// //NB lots of types of event are available

// //player clicks hold button
// document.querySelector('.btn-hold').addEventListener('click',function () {
//     if (gamePlaying) {
//         //Add current score to global score
//         scores[activePlayer] += roundScore;
//         //Update the UI
//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//         //Check if player won the game
//         if (scores[activePlayer] >= 20) {
//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             // document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         } else {
//             //next Player
//             nextPlayer();
//         }
//     }
// });

// document.querySelector('.btn-new').addEventListener('click', init);

// function nextPlayer () {
//     //next player
//     activePlayer === 0 ?  activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     // document.querySelector('.player-0-panel').classList.remove('active');
//     // document.querySelector('.player-1-panel').classList.add('active');
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
    
//     //hide the dice again
//     document.querySelector('.dice').style.display = 'none'
// };

// function init () {
//     gamePlaying = true;
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     document.querySelector('.dice').style.display = 'none';
//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// };
 