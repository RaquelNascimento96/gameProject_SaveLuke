class Player extends Element {
    constructor(game,x,y,w,h) {
        super(game,x,y,w,h);
    }
    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeysStrokes = [37, 39];
            if (possibleKeysStrokes.includes(key)) {

                switch (key) {
                    case 37:
                        if (this.x >= 10) this.x -= 20;
                        break;
                    case 39:
                        if (this.x <= 1090 - this.width) this.x += 20;
                        break;
                }
            }
        }
    }
    moveDown() {
        if (this.y<250) {
            this.y += 0.5;
        }
    }
    collision(obstacle) {
        //starts here
            let playerLeft = this.x;
            let playerRight = this.x + this.width;
            let playerTop = this.y;
            let playerBottom = this.y + this.width;
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
                    alert("you killed luke, shame on you.");
                }, 10)
                window.location.reload();
            }
            return false;
        //ends above
    }
}