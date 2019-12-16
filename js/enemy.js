class Enemy {
  constructor(ctx,width,height,image,gameWidth,gameHeight){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = (gameWidth/2) - (this.width/2);
    this.posY = (gameHeight/2) - (this.height/2);
  }
    draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }  
}