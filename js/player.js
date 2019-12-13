class Player {
  constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = 50;
    this.posY = gameHeight * 0.98 - this.height;
    this.speed = 2;
    this.speedlight = 0.5;
    this.keys = keys;
    this.setListeners();
    this.arrKeys = [];
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

  setListeners() {
    document.addEventListener("keydown", e => {
      this.arrKeys[e.keyCode] = e.keyCode;
      if(this.arrKeys[this.keys.UP] && this.arrKeys[this.keys.SPACE]){
        this.posY -= this.speed;
        this.speed += this.speedlight;
      }else if(this.arrKeys[this.keys.DOWN] && this.arrKeys[this.keys.SPACE]){
        this.posY += this.speed;
        this.speed += this.speedlight;
      }else if(this.arrKeys[this.keys.LEFT] && this.arrKeys[this.keys.SPACE]){
        this.posX -= this.speed;
        this.speed += this.speedlight;
      }else if(this.arrKeys[this.keys.RIGHT] && this.arrKeys[this.keys.SPACE]){
        this.posX += this.speed;
        this.speed += this.speedlight;
      }else if(this.arrKeys[this.keys.UP]){
        this.posY -= this.speed;  
      }else if(this.arrKeys[this.keys.DOWN]){
        this.posY += this.speed; 
      }else if(this.arrKeys[this.keys.LEFT]){
        this.posX -= this.speed; 
      }else if(this.arrKeys[this.keys.RIGHT]){
        this.posX += this.speed; 
      }   
    });
    document.addEventListener("keyup", e => {
      
      if(this.arrKeys[this.keys.UP] || this.arrKeys[this.keys.DOWN] || this.arrKeys[this.keys.LEFT] || this.arrKeys.RIGHT){
        this.speed = 2;
        this.arrKeys = [];
    }else if(this.arrKeys[this.keys.SPACE]){
      this.speed = 2;
    }
      
    });
  }
}
