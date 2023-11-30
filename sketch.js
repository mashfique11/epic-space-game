var player,player1,player2,player3,player4,player5

var asteroidNumber,asteroid1,asteroid2,asteroid3,asteroid4,asteroid5,asteroid6,asteroid,asteroidGroup

var enemy

var space

var backGround,backGroundThings,bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8

var bgThings10,bgThings1,bgThings2,bgThings3,bgThings4,bgThings5,bgThings6,bgThings7,bgThings8,bgThings9

var star

var nebula

var music

var bgNumber,bgNumberThings,bgThingsGroup

var gameState = "play"

var score

var gameOver,gameOverImg

var restart,restartImg


function preload(){
  player1 = loadImage("spaceship1.png")
  player2 = loadImage("spaceship2.png")
  player3 = loadImage("spaceship3.png")
  player4 = loadImage("spaceship4.png")
  player5 = loadImage("spaceship5.png")

  asteroid1 = loadImage("Asteroid 1.png")
  asteroid2 = loadImage("Asteroid 2.png")
  asteroid3 = loadImage("Asteroid 3.png")
  asteroid4 = loadImage("Asteroid 4.png")
  asteroid5 = loadImage("Asteroid 5.png")
  asteroid6 = loadImage("Asteroid 6.png")
  
  music = loadSound("Florian_Stracker_-_01_Jupiter.mp3")

  bg1 = loadImage("1.png")
  bg2 = loadImage("2.png")
  bg3 = loadImage("3.png")
  bg4 = loadImage("4.png")
  bg5 = loadImage("5.png")
  bg6 = loadImage("6.png")
  bg7 = loadImage("6.png")
  bg8 = loadImage("7.png")

 bgThings1 = loadImage("DustCloud 1.png")
 bgThings2 = loadImage("DustCloud 2.png")
 bgThings3 = loadImage("DustWisps 1.png")
 bgThings4 = loadImage("DustWisps 2.png")
 bgThings5 = loadImage("EM Cloud (1).png")
 bgThings6 = loadImage("EM Cloud (2).png")
 bgThings7 = loadImage("EM Cloud (3).png")
 bgThings8 = loadImage("Starflare.png")
 bgThings9 = loadImage("Nebula 1.png")
 bgThings10 = loadImage("Nebula 2.png")
 bgThings11 = loadImage("Nebula 3.png")
 
 restartImg = loadImage("restart.png")
 gameOverImg = loadImage("gameOver.png")

}


function setup(){
  createCanvas(windowWidth,windowHeight)

  bg()

  console.log("hello world")
  player = createSprite(windowWidth/2,windowHeight/2 + 200 )
 
  

  asteroidGroup = new Group()
  bgThingsGroup = new Group()

  music.loop()

  player.scale =0.5

  gameOver = createSprite(windowWidth/2,windowHeight/2-50,100,100)
  restart = createSprite(windowWidth/2,windowHeight/2+50,100,100)

  gameOver.addImage("gameOver",gameOverImg)
  restart.addImage("restart",restartImg)


  gameOver.visible = false
  restart.visible = false

  

}



function draw(){
  background(0)

  textSize(20)
  fill("white")
  player.debug = true
  player.setCollider("circle",0,0,130)

  if(gameState == "play"){
        if(keyDown("A")){
                player.x = player.x-5
        }

        if(keyDown("left_arrow")){
                player.x = player.x-5
        }
        if(keyDown("D")){
                player.x = player.x+5
        }

        if(keyDown("right_arrow")){
                player.x = player.x+5
        }
        
  }

  if(gameState == "end"){
        backGround.velocityY = 0
        bgThingsGroup.velocityY = 0
        asteroid.velocityY = 0
        gameOver.visible = true
        restart.visble = true
  }
  if(asteroidGroup.isTouching(player)){
        gameState = "end"
        

  }
  if(mousePressedOver(restart)){
        reset()
  }

  obstacles()
  
  drawSprites()

  bgT()

  rocket()

  
  score = Math.round(frameCount/10)

  text("score:"+score,windowWidth-windowWidth+200,windowHeight-windowHeight+400)
}


function obstacles(){
    

if(frameCount%50 === 0){
    asteroid = createSprite(windowWidth,(windowHeight - windowHeight) - 20,10,10)
    asteroidGroup.add(asteroid)
    asteroid.x = Math.round(random(1,windowWidth))
    asteroid.lifetime = 200
    
    asteroid.debug = true
    asteroid.velocityY = 8

  asteroidNumber = Math.round(random(1,6))
  switch(asteroidNumber){
    case 1 : asteroid.addImage("asteroid1",asteroid1)
            break 
    case 2 : asteroid.addImage("asteroid2",asteroid2)
            break 
    case 3 : asteroid.addImage("asteroid3",asteroid3)
            break 
    case 4 : asteroid.addImage("asteroid4",asteroid4)
            break 
    case 5 : asteroid.addImage("asteroid5",asteroid5)
            break 
    case 6 : asteroid.addImage("asteroid6",asteroid6)
            break
    default:break
    
  }
  
 }
}

function bgT(){
    if(frameCount% 250 == 0){
        backGroundThings = createSprite(100,(windowHeight-windowHeight)-500,10,10)
        backGroundThings.velocityY = 10
        backGroundThings.x = Math.round(random(0,windowWidth))
        bgThingsGroup.add(backGroundThings)
        
        player.depth = backGroundThings.depth+1

        bgNumberThings = round(random(1,11))
        switch(bgNumberThings){
            case 1 : backGroundThings.addImage("backGround1t",bgThings1)
                    break
            case 2 : backGroundThings.addImage("backGround2t",bgThings2)
                    break
            case 3 : backGroundThings.addImage("backGround3t",bgThings3)
                    break
            case 4 : backGroundThings.addImage("backGround4t",bgThings4)
                    break
            case 5 : backGroundThings.addImage("backGround5t",bgThings5)
                    break
            case 6 : backGroundThings.addImage("backGround6t",bgThings6)
                    break
            case 7 : backGroundThings.addImage("backGround7t",bgThings7)
                    break
            case 8 : backGroundThings.addImage("backGround8t",bgThings8)
                    break
            case 9 : backGroundThings.addImage("backGround9t",bgThings9)
                    break
            case 10 : backGroundThings.addImage("backGround10t",bgThings10)
                    break
            case 11 : backGroundThings.addImage("backGround11t",bgThings11)
                    break
            default:break
        }
        backGroundThings.depth = player.depth
        backGround.depth = player.depth     

    }
 
}

function bg(){

    backGround = createSprite(windowWidth/2,windowHeight/2)
    backGround.scale = 0.5
    backGround.velocityY = 5
    if(backGround.y>1000){
       backGround.y = windowHeight/2
    }

    bgNumber = Math.round(random(1,8))
    switch(bgNumber){
      case 1 : backGround.addImage("backGround1",bg1)
              break
      case 2 : backGround.addImage("backGround1",bg2)
              break
      case 3 : backGround.addImage("backGround1",bg3)
              break
      case 4 : backGround.addImage("backGround1",bg4)
              break
      case 5 : backGround.addImage("backGround1",bg5)
              break
      case 6 : backGround.addImage("backGround1",bg6)
              break
      case 7 : backGround.addImage("backGround1",bg7)
              break
      case 8 : backGround.addImage("backGround1",bg8)
              break 
      default:break                  
              

    }
    

}


function rocket(){
        
        rocketNo = Math.round(random(1,5))
        switch(rocketNo){
          case 1 : player.addImage("rocket1",player1)
                  break
          case 2 : player.addImage("rocket2",player2)
                  break
          case 3 : player.addImage("rocket3",player3)
                  break
          case 4 : player.addImage("rocket4",player4)
                  break
          case 5 : player.addImage("rocket5",player5)
                  break       
        }
}

function reset(){
        

       gameState = "play"
      gameOver.visble = false
      restart.visible = false

}