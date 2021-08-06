var score=0;
var distance=0;

var bg,bg2;
var umbrella, umbrellaImg;
var raindrop, raindropImg;
var robotGroup,raindropGroup;
var robot1, robot1Img, robot2, robot2Img, robot5, robot5Img,robot7, robot7Img;
var greycloud,greycloud1,greycloud2,greycloud3,greycloud4,greycloud5,greycloud6, greycloudImg;

function preload() {
 
  
  bg= loadImage("images/bg.jpg");
  bg2=loadImage("images/bg2.jpg")

  umbrellaImg=loadImage("images/umbrella.png");
  
  robot1Img=loadImage("images/robot1.png");
  robot2Img=loadImage("images/robot2.png");
  robot3Img=loadImage("images/robot3.png");
  robot4Img=loadImage("images/robot4.png");
  robot5Img=loadImage("images/robot5.png");
  robot6Img=loadImage("images/robot6.png");
  robot7Img=loadImage("images/robot7.png");

  raindropImg=loadImage("images/raindrop.png");

  greycloudImg=loadImage("images/greycloud.png");
  
}

function setup() {
  createCanvas(1000,500);
  
  umbrella=createSprite(200,240,90,10);
  umbrella.addImage(umbrellaImg);
  umbrella.scale=0.4;


robotGroup=createGroup();
raindropGroup=createGroup();
}



function draw() {
  background(bg);
 
  robots();
  raindrops();

  //raindrop.depth=robot1.depth;
  //robot1.depth=robot1.depth+1;

  if(robotGroup.isTouching(raindrop)){
    score-=1;
    robotGroup.destroyEach();
    console.log(robotGroup.depth);
    
  }

  if(raindropGroup.isTouching(umbrella)){
    raindropGroup.destroyEach();
    //console.log(raindrop.depth);
  }



  fill("yellow");
  textSize(20);
  text("Score: "+ score, 70,480);

  //replaced multiple lines of code to make a line of clouds 
  for (var i = 100; i < 1000; i=i+140){
    greycloud=createSprite(i,30,90,10);
    //console.log(i);
    greycloud.addImage(greycloudImg);
    greycloud.scale=0.5;
    }
  

  //umbrella.y=World.mouseY;
  umbrella.x=World.mouseX;
    
  


  if(score === 100) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("Congratulations!!!",250, 180);
    text("Congratulations!!!",250, 180);
    raindropGroup.hide();

  }


  
  
  drawSprites()
}

function robots(){
  if (frameCount % 100 === 0){
    //position= Math.round(random(1,2));
     robot1=createSprite(100,350,90,10);
    robot1.velocityX = 5;
     robot2=createSprite(900,350,90,10);
    robot2.velocityX= -5;
  
    
    var rand=Math.round(random(1,7));
    switch(rand){
      case 1: robot1.addImage(robot1Img);
        break;
      case 2: robot1.addImage(robot2Img);
        break;
      case 3: robot1.addImage(robot5Img);
        break;
      case 4: robot1.addImage(robot7Img);
        break;
      case 5: robot2.addImage(robot3Img);
        break;
      case 6:robot2.addImage(robot4Img);
        break;
      case 7:robot2.addImage(robot6Img);
        break;
      default: break;

    }

    if(robot1.distance > 500){
      score+=1;
    }

    if(robot2.distance > 100){
      score+=1;
    }

    robot1.scale=0.1;
    robot1.setLifetime=100;

    robot2.scale=0.1;
    robot2.setLifetime=100;
    
    

    robotGroup.add(robot1);
  }
  
}



function raindrops(){
  if(frameCount %5===0){
    raindrop=createSprite(50,200,90,10);
    raindrop.y=Math.round(random(1,-700));
    raindrop.addImage(raindropImg);
    raindrop.scale=0.1;
    raindrop.velocityY= 5;
    raindrop.velocityX=5;

    raindrop.lifetime=300;

    


    
  }
}
