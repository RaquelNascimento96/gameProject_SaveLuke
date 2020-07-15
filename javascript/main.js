// window.onload = function () {
//     //to start, we need to get the start button; when we click, it should start with our method
//     document.getElementById("start-button").onclick = function(){
//        start()
//     }
//     function start () {
//         const myGame = new Game ();
//         myGame.init();
//     }
// };


function buildScreen (htmlString) {
     let div = document.createElement("div");
     div.innerHTML = htmlString;
     return div.children[0]
 }

 let mainContainer = document.getElementById("game-main")

 function main () {
     let game
     let splashScreen
     let gameScreen
     let gameOverScreen
     //let victoryScreen

     function createSplashScreen() {
         splashScreen = buildScreen(`<div id="first-screen">
        <h2>Save Luke!</h2>
        <p> Luke went skiing with his friends and forgot he doesn't actually know how to ski... 
        <br>Help Luke get to safety, by moving the arrows left and right to avoid trees and mountains!
        </p>
        <button id="start-button">Press here to start</button>
    </div>`)
         mainContainer.appendChild(splashScreen)
         let startButton = document.getElementById("start-button")
         startButton.addEventListener('click', function() {
 			startGame();
 		});
     }
     function removeSplashScreen() {
 		splashScreen.remove();
     }
    
     function createGameScreen() {
         gameScreen = buildScreen(`<div id="game-screen">
            <h2>Save Luke!</h2>
            <div id="timer">
            <p>Timer
            <span id="minDec" class="number">0</span><span id="minUni" class="number">0</span><span>:</span
            ><span id="secDec" class="number">0</span><span id="secUni" class="number">0</span>
            </p>
    </div>
        <div class="game-canva">
        <canvas id="canvas" width="1300" height="550"></canvas>
        </div>
    </div>`)

         mainContainer.appendChild(gameScreen)
         return gameScreen
     }
    
     function removeGameScreen() {
         gameScreen.remove();
     }
    
     function createGameOverScreen() {
         gameOverScreen = buildScreen(`<div id="gameOver-screen">
            <h2>Luke didn't make it :(</h2>
            <img src='../images/deadInside.gif'>
            <button id="tryAgain-button">Try again</button>
    </div>`)

        mainContainer.appendChild(gameOverScreen)  
         
         let tryAgaintBtn = document.getElementById("tryAgain-button");
         
         tryAgaintBtn.addEventListener('click', function() {
            startGame();
        });

     }
     function removeGameOverScreen() {
         if (gameOverScreen !== undefined) {
			gameOverScreen.remove();
		 }
     }

    //  function createVictoryScreen() {
    //      victoryScreen = buildScreen("<div id="win-screen">
    //         <h2>Luke is safe! You rock</h2>
    //         <img src="/images/party.gif">
    //         <button id="playAgain-button">Play again</button>
    // </div>")
         
    //      mainContainer.appendChild(victoryScreen)
        
    //      let restartBtn = gameOverScreen.querySelector('playAgain-button');
    //      restartBtn.addEventListener('click', function(){
 	// 		startGame()
 	// 	});
    //  }
    //  function removeVictoryScreen() {
 	// 	victoryScreen.remove();
    //  }

     function startGame() {
         removeSplashScreen();
         removeGameOverScreen();
         //removeVictoryScreen();

         game = new Game();
         game.gameScreen = createGameScreen();
         game.init();

     }

     callGameOver = () =>{
        removeGameScreen();
        createGameOverScreen()
    
      }

    //  function gamevictory () {
    //      removeGameScreen();
    //      createVictoryScreen();
    //  }
    
    createSplashScreen()

 }

window.onload = function () {
    main()
}