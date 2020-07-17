class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.luke = new Player(this, 475, 100, 90, 90);
        this.mountain = [];
        this.tree = [];
        this.snow = [];
        this.background = undefined;
        this.x = undefined;
        this.y = undefined;
        this.width = 1300;
        this.height = 550;

        //GAME FLAGS
        this.gameStop = false;
        this.gameOver = false;

        // //TIMER
        this.timer = 20


        //SOUNDS
        this.gameOverSound = new Audio('/sounds/goddamnit.mp3')
        this.gameSound = new Audio('/sounds/starWarsTheForce.mp3')
        this.gameWinSound = new Audio('/sounds/woohoo.mp3')
    }

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.x = 0;
        this.y = 0;
        this.start()
        this.createMountain();
        this.createTree()
        this.createSnow();
        this.gameSound.play();
    }

    start(){
        
        const startInterval = setInterval(() => {
            if (!this.gameStop) {
                setTimeout(() => {
                    this.timer -=(1/60)
                }, 800);
                this.printTimer ()
                this.clearCanva()
                this.drawBackground()
                this.drawLuke()
                this.luke.move();
                this.luke.moveDown()
                for (let i=0; i<this.mountain.length; i++) {
                    this.mountain[i].moveMountain();
                    this.mountain[i].drawMountain();
                    this.collision(this.mountain[i]);
                    //removing obstacles so they don't create huge arrays
                    if (this.mountain[i].y < -200) {
                        this.mountain.splice(i, 1)
                    }
                }
                for (let i=0; i<this.tree.length; i++) {
                    this.tree[i].moveTree();
                    this.tree[i].drawTree();
                    this.collision(this.tree[i]);
                    if (this.tree[i].y < -200) {
                        this.tree.splice(i, 1)
                    }
                }
                for (let i=0; i<this.snow.length; i++) {
                    this.snow[i].moveSnow();
                    this.snow[i].drawSnow()
                    if (this.snow[i].y > 560) {
                        this.snow.splice(i, 1)
                    }
                }
            }
            this.checkGameIsOver()
            
            if (this.gameStop) {
                const timeOut = 5; 
                    setTimeout(() => {
                        clearInterval(startInterval); 
                    }, timeOut);
             }
        },1000/60)
    }

    drawBackground() {
        this.ctx.fillStyle = "rgb(253,233,161)";
        this.ctx.fillRect(0,0,this.width, this.height)
    }

    clearCanva() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height)
    }

     drawLuke() {
         this.luke.drawElement('../images/luke.png');
     }

    createMountain() {
        if (Math.floor(Math.random() * 10) % 3 === 0) {
            this.mountain.push(new Mountain(this))
        }

        setTimeout(() => {
            this.createMountain();
        }, 1000)
        console.log("new mountains created:", this.mountain)
    }

    createTree() {
        if (Math.floor(Math.random() * 10) % 2 === 0) {
            this.tree.push(new Tree(this))
        }

        setTimeout(() => {
            this.createTree();
        }, 5000)
        console.log("new trees created:", this.tree)
    }

    createSnow() {
        if (Math.floor(Math.random() * 10) +1) {
            this.snow.push(new Snow(this))
        }

        setTimeout(() => {
            this.createSnow();
        }, 300)
        console.log("new snow flakes created:", this.snow)
     }

    //COLLISIONS
    collision(obstacle) {
        //starts here
            let playerLeft = this.luke.x;
            let playerRight = this.luke.x + this.luke.width;
            let playerTop = this.luke.y;
            let playerBottom = this.luke.y + this.luke.width;
            let obstacleLeft = obstacle.x;
            let obstacleRight = obstacle.x + obstacle.width;
            let obstacleTop = obstacle.y;
            let obstacleBottom = obstacle.y + obstacle.width;

            let crossLeft = (obstacleLeft <= playerRight) && (obstacleLeft >= playerLeft);
            let crossRight = (obstacleRight >= playerLeft) && (obstacleRight <= playerRight);
            let crossBottom = (obstacleBottom >= playerTop) && (obstacleBottom <= playerBottom);
            let crossTop = (obstacleTop <= playerBottom) && (obstacleTop >= playerTop);

            if((crossLeft || crossRight) && (crossBottom || crossTop)) {
                    this.gameOver = true
            }
            return false;
        //ends above
    }

    printTimer () {
        let countdown =document.getElementById("time");
        countdown.innerHTML=this.timer.toFixed(0)
    }
    
    checkGameIsOver () {
        this.didYouWin()
         if(this.gameOver) {
             this.gameStop = true;
            this.gameOverSound.volume=0.4
             this.gameOverSound.play()
             this.gameSound.pause();
             setTimeout(() => {
                return callGameOver()
             },500)
         }
     }

     didYouWin () {
         if(this.timer<0) {
             this.gameStop = true;
             this.gameWinSound.volume =0.4;
             this.gameWinSound.play();
             this.gameSound.pause();
             return callGameWin();
         }
     }

 }