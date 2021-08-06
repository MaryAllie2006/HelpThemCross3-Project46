function bounceOff(umbrella,raindrop){
    if (umbrella.x - raindrop.x < raindrop.width/2 + umbrella.width/2
      && raindrop.x - umbrella.x < raindrop.width/2 + umbrella.width/2) {
        umbrella.velocityX = umbrella.velocityX * (-1);
        raindrop.velocityX = raindrop.velocityX * (-1);
  }
  if (umbrella.y - raindrop.y < raindrop.height/2 + umbrella.height/2
    && raindrop.y - umbrella.y < raindrop.height/2 + umbrella.height/2){
        umbrella.velocityY = umbrella.velocityY * (-1);
        raindrop.velocityY = raindrop.velocityY * (-1);
  }
  }