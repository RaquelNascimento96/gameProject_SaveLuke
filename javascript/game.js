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
        this.width = 1200;
        this.height = 550;
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
        setInterval(() => {
            this.clearCanva()
            this.drawBackground()
            this.drawLuke()
            this.luke.move();
            this.luke.moveDown()
            for (let i=0; i<this.mountain.length; i++) {
                this.mountain[i].moveMountain();
                this.mountain[i].drawMountain();
                this.luke.collision(this.mountain[i]);
                //how to remove obstacles once they never collided with the car, and are about to leave the canvas
                if (this.mountain[i].y < -100) {
                    this.mountain.splice(i, 1)
                }
            }
            for (let i=0; i<this.tree.length; i++) {
                this.tree[i].moveTree();
                this.tree[i].drawTree();
                this.luke.collision(this.tree[i]);
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
         this.luke.drawElement("images/luke.png");
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
     
     gameOverCallback () {
        this.gameOver();
     }

     gameWinCallBack () {

     }
    
 }