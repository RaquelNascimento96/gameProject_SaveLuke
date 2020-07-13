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
        this.gameIsOver = false;
        this.gameIsWon = false;
        this.gameStop = false;

        // //TIMER
        // this.timer = new Chronometer();
        // this.minDec = document.getElementById('minDec')
        // this.minUni = document.getElementById('minUni');
        // this.secDec = document.getElementById('secDec');
        // this.secUni = document.getElementById('secUni');
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
    }

    start(){
        let startInterval = setInterval(() => {
            this.clearCanva()
            this.drawBackground()
            this.drawLuke()
            //this.timer.startClick(this.printTime)
            this.luke.move();
            this.luke.moveDown()
            for (let i=0; i<this.mountain.length; i++) {
                this.mountain[i].moveMountain();
                this.mountain[i].drawMountain();
                this.collision(this.mountain[i]);
                this.checkGameIsOver()
                //removing obstacles so they don't create huge arrays
                if (this.mountain[i].y < -100) {
                    this.mountain.splice(i, 1)
                }
            }
            for (let i=0; i<this.tree.length; i++) {
                this.tree[i].moveTree();
                this.tree[i].drawTree();
                this.collision(this.tree[i]);
                this.checkGameIsOver();
                if (this.tree[i].y < -100) {
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
            if (this.gameStop) {
                const timeOut = -5; 
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
         this.luke.drawElement("../images/luke.png");
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
        }, 9000)
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

            let crossLeft = obstacleLeft <= playerRight && obstacleLeft >= playerLeft;
            let crossRight = obstacleRight >= playerLeft && obstacleRight <= playerRight;
            let crossBottom = obstacleBottom >= playerTop && obstacleBottom <= playerBottom;
            let crossTop = obstacleTop <= playerBottom && obstacleTop >= playerTop;
            if ((crossLeft || crossRight) && (crossBottom || crossTop)) {
                setTimeout(() => {
                    this.gameStop = true
                    // this.gameIsOver = true
                }, 5)
    //            window.location.reload();
            }
            return false;
        //ends above
    }
    
    checkGameIsOver () {
         if(this.gameStop) {
             return this.gameOver()
         }
     }

     gameOver () {
         return callGameOver();
     }

     //TIMER LOGIC

        // let milDec = document.getElementById('milDec');
        // let milUni = document.getElementById('milUni');

    // printTime() {
    //   this.printMinutes();
    //   this.printSeconds();
    // }
    // printMinutes() {
    //   this.minDec.innerText = this.timer.twoDigitsNumber(this.timer.getMinutes()).charAt(0);
    //   this.minUni.innerText = this.timer.twoDigitsNumber(this.timer.getMinutes()).charAt(1);
    // }
    // printSeconds() {
    //   this.secUni.innerText = this.timer.twoDigitsNumber(this.timer.getSeconds())[1];
    //   this.secDec.innerText = this.timer.twoDigitsNumber(this.timer.getSeconds())[0];
    // }
    // function printMilliseconds() {
    //   milUni.innerText = this.timer.twoDigitsNumber(this.timer.getMilSeconds())[1];
    //   milDec.innerText = this.timer.twoDigitsNumber(this.timer.getMilSeconds())[0];
    // }

        

     
 }