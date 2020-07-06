# Project's name
Save Luke

## Description
Save Luke is a game where Luke (the player) is going down a mountain, and has to avoid mountains and trees (obstacles) in order to survive. If he doesn't collide with any obstacles before his 40 second time finishes, he lives (aka it’s victory). Otherwise, he dies and it's gameover.


## MVP (DOM - CANVAS)
- The player (Luke) can move to the left and right sides
- Obstacles appear randomly from the bottom and go up the whole canvas
- Obstacles are deleted once they reach the end of the canvas
- Background elements are created with obstacles logic, but without collision
- If the player collides with an obstacle, dies and it’s game over

## Backlog
- Timer - if the user reaches 0:00 without collisions, wins
- Level of difficulty - obstacles appear faster in the final seconds
- Player changes direction when we press right or left keys
- Sound effects for victory and game-over scenarios
- Levels - with less time and more speed of the obstacles

## Data structure

### game.js
```
    game () {
        constructor() {
            this.canvas;
            this.ctx;
            this.luke;
            this.mountains;
            this.tress;
            this.background;
            this.x;
            this.y;
            this.width;
            this.height
        }
    }
    init()
    start()
    drawBackground()
    drawLuke()
    createMountain()
    createTree()
    createSnow()
    clearCanva()
```

### main.js
```
buildSplashScreen()
buildGameScreen()
buildGameOverScreen()
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
    collision()
```

### mountain.js
```
    mountain Extends element () {
        constructor()
    }
    draw()
    move()
```

### tree.js
```
    tree Extends element () {
        constructor()
    }
    draw()
    move()
```

### snow.js
```
    snow Extends element () {
        constructor()
    }
    draw()
    move()
```


## States & States Transitions

- splashScreen
  - drawSplashScreen ()
  - addEventListener(startGame)
  
  
- startGame
  - drawGameScreen()
  - game.init()
  
- gameOver()
  - drawGameOverScreen()
  - addEventListener(tryAgain) 


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
[Link Repo](https://github.com/RaquelNascimento96/gameProject_SaveLuke)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)