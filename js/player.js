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
    this.keys = keys;
    this.setListeners();
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
      if (e.keyCode === this.keys.UP) {
          this.posY -= this.speed;
      } else if (e.keyCode === this.keys.DOWN) {
          this.posY += this.speed;
      } else if (e.keyCode === this.keys.RIGHT) {
          this.posX += this.speed;
      } else if (e.keyCode === this.keys.LEFT) {
          this.posX -= this.speed;
      }

    });
  }
}
