class Element {
     constructor(game,x,y,w,h) {
         this.game = game;
         this.x = x;
         this.y = y;
         this.width = w;
         this.height = h;
         this.img = new Image();
     }
     drawElement(imgSource) {
         const gameCtx = this.game.ctx;
         this.img.src = imgSource;
         gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height)
     }
 }