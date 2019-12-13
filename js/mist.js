class Mist{
  constructor(ctx, width, height){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.posX = 50;
    this.posY = 50;
  }

  generateMist(){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  draw(){
    for(let i=1; i<9; i++){
      for(let j=1; j<9; j++){
        this.generateMist(this.posX*i,this.poxY*j,this.width,this.height);
        console.log("pintame");
      }
    }  
  }
}