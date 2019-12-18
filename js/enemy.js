class Enemy {
  constructor(ctx,width,height,image,gameWidth,gameHeight){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = (gameWidth/2) - (this.width/2);
    this.posY = (gameHeight/2) - (this.height/2);
    this.direction = 0;
    this.speed = 3;
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
    randomDirection(){
      this.direction = Math.floor(Math.random()*4);
    }

    move(framesCounter){
      if(framesCounter % 100 === 0) this.randomDirection();
      if(this.direction === 0){
        if(this.posY <= 0){
          this.posY = 0;
        }else {
          this.posY -= this.speed;
        }
      }else if(this.direction === 1){
        if(this.posY >= 450){
          this.posY = 450;
        }else {
          this.posY += this.speed;
        }
      }else if(this.direction === 2){
        if (this.posX <= 0){
          this.posX = 0;
        }else {
          this.posX -= this.speed;
        }
      }else if(this.direction === 3){
        if (this.posX >= 850){
          this.posX = 850;
        } else {
          this.posX += this.speed;
        }
      }

    }
  
}