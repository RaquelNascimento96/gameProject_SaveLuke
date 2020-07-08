class Tree extends Element {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 1000 + 30);
        this.y =800;
        this.width = 90;
        this.height = 90;
        this.img = new Image();
    }
    drawTree() {
        this.img.src = "./images/tree.png";
        this.game.ctx.drawImage(
            this.img, this.x, this.y, this.width, this.height
        )
    }
    //method to move obstacles randomly on the y axis (in this case, at every odd number)
    moveTree() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y -= 4;
            //this.x += 5;
        }
    }
}