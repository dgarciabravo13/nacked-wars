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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.reqId;
    this.continueAnimating = true;
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
    var startBtn = document.getElementById("start-button");
    startBtn.onclick = function() {
      startBtn.blur();
    };
  }

  start() {
    this.reset();
    function step(timestamp) {
      if (this.continueAnimating) {
        this.framesCounter++;
        this.clear();
        this.drawAll();
        this.moveAll();
        this.colision();
        this.winner();
        if (this.framesCounter > 1000) this.framesCounter = 0;
        this.reqId = window.requestAnimationFrame(step.bind(this));
      }
    }
    if (this.continueAnimating)
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
    console.log("you lose");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 1000, 600);
    this.ctx.save();
    this.ctx.font = "40px StarJedi";
    this.ctx.strokeStyle = "yellow";
    this.ctx.strokeText("you have a merge conflict?", 150, 200);
    this.ctx.strokeText("git push and", 300, 250);
    this.ctx.strokeText("may the --force be with you", 150, 300);
    this.ctx.restore(), window.cancelAnimationFrame(this.reqId);
    this.continueAnimating = false;
    // }
  }
  winner() {
    let total = this.board
      .reduce(function(a, b) {
        return a.concat(b);
      })
      .some(function(a) {
        return a;
      });
    if (!total) {
      console.log("you win");
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, 1000, 600);
      this.ctx.save();
      this.ctx.font = "40px Star Jedi Rounded";
      this.ctx.strokeStyle = "yellow";
      this.ctx.strokeText("congratulation!", 330, 200);
      this.ctx.strokeText("you are a Jedi master!", 250, 250);
      this.ctx.strokeText("...develop, perhaps?", 275, 300);
      this.ctx.restore(), window.cancelAnimationFrame(this.reqId);
      this.continueAnimating = false;
      window.cancelAnimationFrame(this.reqId);
      this.continueAnimating = false;
    }
  }
}
