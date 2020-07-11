class Snow extends Element {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 1070 + 0);
        this.y = -30;
        this.width = 20;
        this.height = 20;
        this.img = new Image();
    }
    drawSnow() {
        this.img.src = "./images/snow.png";
        this.game.ctx.drawImage(
            this.img, this.x, this.y, this.width, this.height
        )
    }
    //method to move obstacles randomly on the y axis 
    moveSnow() {
        if (Math.floor(Math.random() * 10) % 2 === 0) {
            this.y += 2;
            //this.x += 1;
        }
    }
}