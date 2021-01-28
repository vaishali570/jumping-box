var canvas;
var music;
var box1,box2,box3,box4;
var mainBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    box1=createSprite(700,580,150,10);
    box1.shapeColour="red";

    box2=createSprite(100,580,150,10);
    box2.shapeColour="yellow";
    
    box3=createSprite(500,580,150,10);
    box3.shapeColour="green";

    box4=createSprite(300,580,150,10);
    box4.shapeColour="orange";
   
    mainBox=createSprite(200,100,20,20);
    mainBox.shapeColour="white";
    mainBox.MouseY;
    
 
    

    

}

function draw() {
    background("black"); 
    
mainBox.bounceOff(box1);
mainBox.bounceOff(box2);
mainBox.bounceOff(box3);
mainBox.bounceOff(box4);


if (box1.x-box2.x<box1.width/2+box2.width/2
    && box2.x-box1.x<box2.width/2+box1.width/2
    && box1.y-box2.y<box1.height/2+box2.height/2
    && box2.y-box1.y<box2.height+box1.height){
        mainBox.shapeColour="red"
    }

if (box3.x-box4.x<box3.width/2+box4.width/2
    &&box4.x-box3.x<box4.width/2+box3.width/2
    &&box3.y-box4.y<box3.width/2+box4.width/2
    &&box4.y-box3.y<box4.height/2+box3.height/2){
        mainBox.shapeColour="yellow";
    }


   
    //add condition to check if box touching surface and make it box
drawSprites();
}
