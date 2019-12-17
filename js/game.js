class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = 1000;
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
    this.board = [
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.reqId;
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  }

  start() {
    this.reset();
    function step(timestamp) {
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.moveAll();
      this.colision();
      if (this.framesCounter > 1000) this.framesCounter = 0;
      this.reqId = window.requestAnimationFrame(step.bind(this));
    }
    this.reqId = window.requestAnimationFrame(step.bind(this));
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
      this.playerKeys,
      this.board
    );
    this.mist = new Mist(this.ctx, 45, 45, this.board, this.veilCounter);
    this.enemy = new Enemy(
      this.ctx,
      200,
      200,
      "images/grievous.png",
      this.width,
      this.height
    );
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawAll() {
    this.background.draw();
    this.mist.draw(this.board);
    this.player.draw();
    this.enemy.draw();
  }
  colision() {
    if (
      this.player.posX + this.player.width > this.enemy.posX &&
      this.enemy.posX + this.enemy.width > this.player.posX &&
      this.player.posY + this.player.height > this.enemy.posY &&
      this.enemy.posY + this.enemy.height > this.player.posY
    ) {
      this.gameOver();
    }
  }
  moveAll() {
    this.enemy.move(this.framesCounter);
  }

  gameOver() {
    //alert("a tomar por culo");
    console.log("hola");
    // this.reqId = window.requestAnimationFrame(function(){});
    //  while(this.reqId--){
    //   window.cancelAnimationFrame(this.reqId);
    // }
    window.cancelAnimationFrame(this.reqId);
    // }
  }
  // winner(){
  // }
}
