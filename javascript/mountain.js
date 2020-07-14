class Mountain extends Element {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 1000 + 30);
        this.y =800;
        this.width = 180;
        this.height = 180;
        this.img = new Image();
    }
    drawMountain() {
        this.img.src = `./images/mountain.png`;
        this.game.ctx.drawImage(
            this.img, this.x, this.y, this.width, this.height
        )
    }
    //method to move obstacles randomly on the y axis 
      moveMountain() {
          if (Math.floor(Math.random() * 20) % 3 === 0) {
              this.y -= 7;
              //this.x += 5;
          }
      }
}