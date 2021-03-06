class Player {
  constructor(ctx, width, height, image, gameWidth, gameHeight, keys,board) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.posX = gameWidth * 0.08 - this.width;
    this.posY = gameHeight * 0.98 - this.height;
    this.speed = 5;
    this.speedlight = 0.5;
    this.keys = keys;
    this.board = board;
    this.setListeners();
    this.arrKeys = [];
    this.sound = new Audio();
    this.sound.src = 'sounds/bb8.mp3'
  }
  clearBoard() {
   let x = Math.round(this.posX/50)
   let y = Math.round(this.posY/50)
    // console.log(this.board[y][x]);
    // console.log("position posX ==>>",this.posX);
    // console.log("position poxY ==>>",this.posY);
    // console.log("posicion X ==>>",x);
    // console.log("posicion Y ==>>",y);
    this.board[y][x] = 0;
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

  scream() {
    if (this.speed > 25) this.sound.play();
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      this.arrKeys[e.keyCode] = e.keyCode;
      if(this.arrKeys[this.keys.UP] && this.arrKeys[this.keys.SPACE]){
        if(this.posY <= 0){
          this.posY = 0;
        }else {
          this.posY -= this.speed;
          this.speed += this.speedlight;
          this.scream();
          this.clearBoard();
        }
      }else if(this.arrKeys[this.keys.DOWN] && this.arrKeys[this.keys.SPACE]){
        if(this.posY >= 550){
          this.posY = 550;
        }else {
          this.posY += this.speed;
          this.speed += this.speedlight;
          this.scream();
          this.clearBoard();
        }
      }else if(this.arrKeys[this.keys.LEFT] && this.arrKeys[this.keys.SPACE]){
        if (this.posX <= 0){
          this.posX = 0;
        }else {
          this.posX -= this.speed;
          this.speed += this.speedlight;
          this.scream();
          this.clearBoard();
        }
      }else if(this.arrKeys[this.keys.RIGHT] && this.arrKeys[this.keys.SPACE]){
        if (this.posX >= 950){
          this.posX = 950;
        } else {
          this.posX += this.speed;
          this.speed += this.speedlight;
          this.scream();
          this.clearBoard();
        }
      }else if(this.arrKeys[this.keys.UP]){
        if(this.posY <= 0){
          this.posY = 0;
        }else {
          this.posY -= this.speed;
          this.clearBoard();
        } 
      }else if(this.arrKeys[this.keys.DOWN]){
        if(this.posY >= 550){
          this.posY = 550;
        }else {
          this.posY += this.speed;
          this.clearBoard();
        }
      }else if(this.arrKeys[this.keys.LEFT]){
        if (this.posX <= 0){
          this.posX = 0;
        }else {
          this.posX -= this.speed;
          this.clearBoard();
        }
      }else if(this.arrKeys[this.keys.RIGHT]){
        if (this.posX >= 950){
          this.posX = 950;
        } else {
          this.posX += this.speed;
          this.clearBoard();
        }
      }   
    });
    document.addEventListener("keyup", e => {
        this.speed = 5;
        this.arrKeys = [];
    });
  }
}
