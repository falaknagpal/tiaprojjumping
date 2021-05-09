var canvas, box1, box2, box3, box4, square;
var music;

function preload(){
    music = loadSound("Wavecont-Upbeat-Inspiring-Corporate-Full-Length.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(10,570,230,30);
box1.shapeColor = "red";

box2=createSprite(240,570,230,30);
box2.shapeColor = "green";

box3=createSprite(470,570,230,30);
box3.shapeColor = "blue";

box4=createSprite(700,570,230,30);
box4.shapeColor = "yellow";

square=createSprite(random(20,750),40,50,50);
square.shapeColor = "white";
square.velocityY=2;
square.velocityX=1;
  
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    square.bounceOff(edges);
drawSprites();
    //add condition to check if box touching surface and make it box
    if(box1.isTouching(square) && square.bounceOff(box1)) {
        square.shapeColor = "red";
        square.velocityY=0;
        music.play();
    }

    if(box2.isTouching(square) && square.bounceOff(box2)) {
        square.shapeColor = "green";
        square.velocityX=0;
        square.velocityY=0;
    }

    if(box3.isTouching(square) && square.bounceOff(box3)) {
        square.shapeColor = "blue";
        square.velocityX=0;
        square.velocityY=0;
    }

    if(box4.isTouching(square) && square.bounceOff(box4)) {
        square.shapeColor = "yellow";
        square.velocityX=0;
        square.velocityY=0;
        music.play();
    }
}

