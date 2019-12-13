window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    //console.log("image2")
    let game = new Game();
    game.init();
    function step(timestamp){
      game.clear();
      game.drawAll();
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  };

};