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
        if (this.y<400) {
            this.y += 0.5;
        }
    }
    collision(obstacle) {
        //y axis
        if (this.y - 10 <= obstacle.y + obstacle.height && this.y >= obstacle.y) {
            //x axis
            if (this.x >= obstacle.x && this.x <= obstacle.x + obstacle.width) {
                //this.sound(play) //=> to play the sound I chose in the crash
                setTimeout(() => {
                    alert("crash");
                }, 5)
                window.location.reload();
            }
        }
        if (this.y -10 <= obstacle.y - obstacle.height && this.y -10 >= obstacle.y) {
            //x axis
            if (this.x >= obstacle.x && this.x <= obstacle.x + obstacle.width) {
                //this.sound(play) //=> to play the sound I chose in the crash
                setTimeout(() => {
                    alert("crash");
                }, 5)
                window.location.reload();
            }
        }
        if (this.x-10 <= obstacle.x - obstacle.width && this.x >= obstacle.x) {

            if (this.y >= obstacle.y && this.x <= obstacle.y + obstacle.height) {
                //this.sound(play) //=> to play the sound I chose in the crash
                setTimeout(() => {
                    alert("crash");
                }, 5)
                window.location.reload();
            }
        }
        if (this.x -10<= obstacle.x + obstacle.width && this.x >= obstacle.x) {

            if (this.y >= obstacle.y && this.x <= obstacle.y + obstacle.height) {
                //this.sound(play) //=> to play the sound I chose in the crash
                setTimeout(() => {
                    alert("crash");
                }, 5)
                window.location.reload();
            }
        }
    }
}