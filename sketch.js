var cat, catImg,walking,reach;
var garden, gardenImg
var mouse,mouseImg, gift,reached;

function preload() {
    catImg= loadAnimation("images/cat1.png");
    walking=loadAnimation("images/cat2.png","images/cat3.png");
    reach= loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    gift=loadAnimation("images/mouse1.png");
    mouseImg= loadAnimation("images/mouse2.png","images/mouse3.png");
    reached=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("sitting", catImg);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("birthday", gift);
    mouse.scale = 0.15;

}

function draw() {

    background(gardenImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", reach);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", reached);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", walking);
        cat.changeAnimation("catRunning", walking);
        
        mouse.addAnimation("mouseTeasing", mouseImg);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}
