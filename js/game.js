class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1100;
    this.height = 600;
    this.fps = 60;
    this.framesCounter = 0;
    this.playerKeys = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39,
      SPACE: 32
    };
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  }

  start() {
    this.reset();
  }

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(
      this.ctx,
      50,
      50,
      "images/bb82.png",
      this.width,
      this.height,
      this.playerKeys
    );
    this.mist = new Mist(this.ctx,45,45);
  }

  clear(){
    this.ctx.clearRect(0,0,this.width,this.height);
  }

  drawAll() {
    this.background.draw();
    this.player.draw();
  }
}
