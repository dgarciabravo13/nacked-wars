class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1100;
    this.height = 600;
    this.fps = 60;
    this.framesCounter = 0;
  }

  init(){
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  }

  start(){
    this.reset();
    this.drawAll();    
  }

  reset(){
    this.background = new Background(this.ctx, this.width, this.height);
  }

  drawAll(){
    this.background.draw();
  }
}