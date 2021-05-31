  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ,bg1;
var time=0;
var a=0;
var b=0;

function preload() {
 getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1350,645);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(bg1)
    background(bg1);

    fill("white");
    textSize(30);
    text("Time: "+time+a,1040,620);
    fill("white");
    textSize(30);
    text("Hello, Good "+b,1040,580);

    Engine.update(engine);

}

async function getBackgroundImg(){

var response =await  fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

var responseJSON= await response.json();

var datetime = responseJSON.datetime

var responseTime =datetime.slice(11,13);
var datetime = datetime.slice(11,19);

time=datetime

if(responseTime===06){
bg="sunrise1.png"
}
else if(responseTime===07){
bg="sunrise2.png"
}
else if(responseTime===08){
bg="sunrise3.png"
}
else if(responseTime===09){
bg="sunrise4.png"
}
else if(responseTime >= 10 && responseTime<=14){
bg="sunrise5.png"
}
else if(responseTime>=15 && responseTime<=17){
bg="sunrise6.png"
}
else if(responseTime===18){
bg="sunset7.png"
}
else if(responseTime===19){
bg="sunset8.png"
}
else if(responseTime===20){
bg="sunset9.png"
}
else if(responseTime===21){
bg="sunset10.png"
}
else if(responseTime>=22 && responseTime<=02){
bg="sunset11.png"
}
else {
bg="sunset12.png"
}
if(responseTime>24 && responseTime<12){
    a="AM";
}else{
    a="PM";
}
if(responseTime>5 && responseTime<12){
    b="Morning.";
}else if(responseTime>=12 && responseTime<=15){
    b="AfterNoon.";
}else if(responseTime>=15 && responseTime<=21){
    b="Evening.";
}else if(responseTime>=21 && responseTime<=5){
    b="Night.";
}
  bg1=loadImage(bg)

}