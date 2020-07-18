# Save Luke

## Description
Save Luke is a game where Luke (the player) is going down a mountain, and has to avoid mountains and trees (obstacles) in order to survive. If he doesn't collide with any obstacles before timer reaches zero, he lives (aka it’s victory). Otherwise, he dies and it's gameover.


## MVP (DOM - CANVAS)
- The player (Luke) can move to the left and right sides
- Obstacles appear randomly from the bottom and go up the whole canvas
- Obstacles are deleted once they reach the end of the canvas
- Background elements (aka snow flakes) are created with obstacles logic, but without collision
- If the player collides with an obstacle, dies and it’s game over
- Timer - if the user reaches zero without collisions, wins
- Sound effects for the background and victory and game-over scenarios

## Backlog
- Introducing speed/dificulty - making obstacles appearing faster in the final seconds
- Player changes direction when we press right or left keys
- Levels - with less time and more speed of the obstacles

## Data structure

### game.js
```
    game () {
        constructor() {
            this.canvas
            this.ctx
            this.luke
            this.mountain
            this.tree
            this.snow
            this.background
            this.x
            this.y
            this.width
            this.height
    
            //GAME FLAGS
            this.gameStop
            this.gameOver
    
            // //TIMER
            this.timer
    
            //SOUNDS
            this.gameOverSound
            this.gameSound
            this.gameWinSound
        }
    }
    init()
    start()
    drawBackground()
    clearCanva()
    drawLuke()
    createMountain()
    createTree()
    createSnow()
    collision(obstacle)
    printTimer ()
    checkGameIsOver ()
    didYouWin ()
```

### main.js
```
function buildScreen (htmlString)
function main ()
    createSplashScreen()
    removeSplashScreen()
    createGameScreen()
    removeGameScreen()
    createGameOverScreen()
    removeGameOverScreen()
    createVictoryScreen()
    removeVictoryScreen()
    startGame()
    callGameOver()
    callGameWin()
```

### element.js
```
    element() {
        constructor() {
            this.game;
            this.x;
            this.y;
            this.width;
            this.height;
            this.img;
        }
    }
    drawElement()
```

### player.js
```
    player Extends element () {
        constructor ()
    }
    move()
    moveDown()
```

### mountain.js
```
    mountain Extends element () {
        constructor()
    }
    drawMountain()
    moveMountain()
```

### tree.js
```
    tree Extends element () {
        constructor()
    }
    drawTree()
    moveTree()
```

### snow.js
```
    snow Extends element () {
        constructor()
    }
    drawSnow()
    moveSnow()
```


## States & States Transitions
- splashScreen
- gameScreen
- gameOverScreen
- victoryScreen


## Task
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - init
- game - start
- game - drawBackground
- game - drawLuke
- game - createMountain
- game - createTree
- game - createSnow
- game - clearCanva
- player - move
- player - collision
- mountain - draw
- mountain - move
- tree - draw
- tree - move
- snow - draw
- snow - move


## Links


### Trello
[Link url](https://trello.com/b/6pWFei4C/project-1game-save-luke)


### Git
URls for the project repo and deploy
- [Link Repo](https://github.com/RaquelNascimento96/gameProject_SaveLuke)
- [Link Deploy](https://vigilant-wing-ecf596.netlify.app/)


### Slides
URls for the project presentation (slides)
- [Link Slides.com](https://docs.google.com/presentation/d/1fBQUIaDMIxOjBHhSyT6H55ZEd1jRPCibCuhPC_mGgkU/edit?usp=sharing)