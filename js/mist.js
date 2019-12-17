class Mist{
  constructor(ctx, width, height,board){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.board = board;
    this.posX = 50;
    this.posY = 50;
  }

  veil(x,y,width,height){
    this.ctx.fillRect(x,y,width,height);
  }
  draw(board){

    for(let i=0;i<20;i++){
      for(let j=0;j<12;j++){
        let element = board[j][i]
        if(element){
          this.veil(this.posX*i,this.posY*j,this.width,this.height)
        }
      }
    }
  }
  
}