
let rVal = 40;
let gVal = 100;
let bVal = 130;


let faceX; //face ellipse horizontal center
let faceY; //face ellipse vertical center
let faceW; //face ellipse width
let faceH; //face ellipse height

let eyeDist; //variable to hold distance between eyes
let eyeY; //eyeball horizontal center
let eyeW; //eyeball vertical center
let eyeH; //eyeball height
let pupilD; //pupil diameter

let mouthX; //mouth arc ellipse horizontal center
let mouthY; //mouth arc ellipse vertical center
let mouthW; //mouth arc ellipse width
let mouthH; //mouth arc ellipse height
let mouthRad1; //mouth arc start angle
let mouthRad2; //mouth arc stop angle

function setup() {
  createCanvas(400, 400);
  
  
  faceX = width/2;
  faceY = height/2;
  faceW = width/3;
  faceH = 17 * height / 40;
  eyeDist = width/8;
  eyeY = height*32/70;
  eyeW = 3 * width / 72;
  eyeH = height/30;
  pupilD = width/40;
  mouthX = width/2;
  mouthY = 17 * height / 36;
  mouthW = width/6;
  mouthH = 3 * height / 9;
  mouthRad1 = PI/4;
  mouthRad2 = 3*PI/4;
}

function draw() {
 
  console.log("x: " + mouseX + ", y: " + mouseY);
 
  background(rVal, gVal, bVal);
  
   
  
  fill(160,82,45);
  ellipse(faceX,faceY,faceW, faceH); //face
  
  fill(255);
  ellipse(width/2 - eyeDist/2,eyeY,eyeW,eyeH); //eye
  ellipse(width/2 + eyeDist/2,eyeY,eyeW,eyeH); //eye
  fill(128,70,27);
  ellipse(width/2 - eyeDist/2,eyeY, pupilD, pupilD); //pupil
  ellipse(width/2 + eyeDist/2,eyeY, pupilD, pupilD); //pupil
  noFill();
  stroke(0);
  
  arc(mouthX, mouthY,mouthW,mouthH,mouthRad1, mouthRad2 ,CHORD);
}