window.onload = function () {
    //to start, we need to get the start button; when we click, it should start with our method
    document.getElementById("start-button").onclick = function(){
       start()
    }
    function start () {
        const myGame = new Game ();
        myGame.init();
    }
};


// function buildScreen (htmlString) {
//     var div = document.createElement("div");
//     div.innerHTML = htmlString;
//     return div.children[0]
// }

// let mainContainer = document.getElementById("game-main")
// function main () {
//     let game
//     let splashScreen
//     let gameScreen
//     let gameOverScreen
//     let victoryScreen

//     function createSplashScreen() {
//         splashScreen = buildScreen ("")
//         mainContainer.appendChild(splashScreen)
//         startButton.addEventListener('click', function() {
// 			start();
// 		});
//     }
//     function removeSplashScreen() {
// 		splashScreen.remove();
//     }
    
//     function createGameScreen() {
//         gameScreen = buildScreen("")
//         mainContainer.appendChild(gameScreen)
//         return gameScreen
//     }
//     function removeGameScreen() {
// 		gameScreen.remove();
//     }
//     function createGameOverScreen() {
//         gameOverScreen = buildScreen("")
//         mainContainer.appendChild(gameOverScreen)
        
//         let tryAgaintBtn = gameOverScreen.querySelector('button');
//         tryAgaintBtn.addEventListener('click', function(){
// 			start()
// 		});

//     }
//     function removeGameOverScreen() {
// 		gameOverScreen.remove();
//     }
//     function createVictoryScreen() {
//         victoryScreen = buildScreen("")
//         mainContainer.appendChild(victoryScreen)
        
//         let restartBtn = gameOverScreen.querySelector('button');
//         restartBtn.addEventListener('click', function(){
// 			start()
// 		});
//     }
//     function removeVictoryScreen() {
// 		victoryScreen.remove();
//     }
//     function start() {
//         removeSplashScreen();
//         removeGameOverScreen();
//         removeVictoryScreen();

//         game = new Game ();
//         game.gameScreen = createGameScreen();
//         game.init()
//         //game.call Back function from Game for gameover 
//         //game. call back function from game for victory
//     }

// }
