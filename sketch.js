PLAY = 1
END = 0
var gameState = PLAY

function preload(){
    alienImg  = loadImage("alien.png")
    fogueteImg  = loadImage("foguete.png")
    fundoImg = loadImage("fundo.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    fundo = createSprite(width/2, height/2)
    fundo.addImage(fundoImg)
    fundo.scale = 2
    
    

    foguete = createSprite(200, height/2)
    foguete.addImage(fogueteImg)
    foguete.scale = 0.14
    

    alienGroup = new Group();


    


 
}

function draw() {
    background(220)

    

    console.log(gameState)

    if(gameState = PLAY){

        fundo.velocityX = -2
        foguete.y = mouseY

    }else{

        
        

    }
   

    if(alienGroup.isTouching(foguete)){
        gameState = END
        alienGroup.setVelocityXEach(0)
        fundo.velocityX = 0
        foguete.destroy()
    }



    newAlien()
    drawSprites()
}   

function newAlien(){

    if(frameCount % 80 == 0){
    alien = createSprite(width+45, height-Math.round(random(200, 900)), 10, 10)
    alien.addImage(alienImg)
    alien.scale = 0.2
    alien.velocityX = -10
    alienGroup.add(alien)

}

    
if (fundo.x < 0) {
    fundo.x = fundo.width / 2;
  }
    
}

