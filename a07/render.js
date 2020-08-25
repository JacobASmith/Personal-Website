import Game from "./engine/game.js";


let game = new Game(4);
/**
 * Course: COMP 426
 * Assignment: a07
 * Author: Jacob Smith
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * 2048 game engine.
 */
export const renderGame = function(gameState) {
    // get size from gameState
    let size = Math.sqrt(gameState.board.length);
    let htmlGame = "<div id='game' class='content box columns is-variable is-2 is-mobile is-multiline'>"; //"<div class='tile is-ancestor";
    for(let row = 0; row < size; row++) {
        for(let col = 0; col < size; col++) {           
            let val = gameState.board[row*size + col];
            htmlGame += `<div class='column is-one-quarter' style="height: 100%;">`;
            htmlGame += (`<div class='box is-shadowless val${val} ${val >= 8 ? 'gt4': ''}'" style="height:100px;">
                            <p class="has-text-centered has-text-weight-bold">${val > 0 ? val : ''}</p>
                        </div>`);
            htmlGame += `</div>`;   
        }
    }
    htmlGame += `</div>`;
    return htmlGame;
};
export const updateGame = function(gameState) {
    $("#game-container").html(renderGame(gameState));
};
export const updateScore = function(gameState) {
    $('#score p').text(gameState.score);
    let best = parseInt($('#best p').text());
    if(best < gameState.score) {
        $('#best p').text(gameState.score);    
    }

}
export const lossScreen = function(gameObject) {
    $("#game").append(`<div class='gameOver'>
        <h1 class="title tsection" style='z-index:101;'>Game over!</h1>
        <div id="try-again" class="content box is-shadowless has-text-centered" style='z-index:101;'>
        <h1 class="subtitle"  style=  'webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; '>Try Again</h1>
        </div>
    </div>`);
    
    $("#try-again").on("click", (e)=>{ 
        game.setupNewGame(); 
        $("#game-container").html(renderGame(game.getGameState()));
        $('#score p').text(0);
    });
}
export const winScreen = function(gameObject) {
    $("#game").append(`<div class='gameWon'>
        <h1 class="title tsection" style='z-index:101;'>You Win</h1>
        <div>
        <div id="keep-going" class="content box is-shadowless has-text-centered" style='z-index:101;'>
        <h1 class="subtitle"  style=  'webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; '>Keep Going</h1>
        </div>
        <div id="try-again" class="content box is-shadowless has-text-centered" style='z-index:101;'>
        <h1 class="subtitle"  style=  'webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; '>Try Again</h1>
        </div>
        </div>
    </div>`);
    $(document).off('keydown', moveHandler); 
    // remove movecapabilities
    $("#keep-going").on("click", (e) => {
        $(document).on('keydown', moveHandler);
        $(".gameWon").remove(); 
    });

    $("#try-again").on("click", (e)=>{ 
        $(document).on('keydown', moveHandler);
        game.setupNewGame(); 
        $("#game-container").html(renderGame(game.getGameState()));
        $('#score p').text(0);
    });
}
export const moveHandler = function(e) {
    let key = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    }
    if(e.keyCode in key) {
        e.preventDefault();
        game.move(key[e.keyCode]);
    }
}
/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 *   An array of hero objects to load (see data.js)
 */
export const loadGame = function() {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    
    // test gameState
    // let newGamestate = {
    //     score: 2000,
    //     won: false,
    //     over: false,
    //     board: [1024,1024,0,0,   0,0,0,0,  0,0,0,0,  0,0,0,0]
    // }
    // game.loadGame(newGamestate);

    // regular functionality
    game.onMove(updateGame);
    game.onMove(updateScore);
    game.onLose(lossScreen);
    game.onWin(winScreen);
    // game.onLose()
    $("#game-container").append(renderGame(game.getGameState()));
    $("#new-game").on("click", (e)=>{ 
        game.setupNewGame(); 
        $("#game-container").html(renderGame(game.getGameState()));
        $('#score p').text(0);
    });
    
    $(document).on('keydown', moveHandler);
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadGame();
});
