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
        if (this.y<180) {
            this.y += 0.6;
        }
    }
}