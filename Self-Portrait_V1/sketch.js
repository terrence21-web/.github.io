function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  
  //Face
  fill(160,82,45)
  ellipse(width/2,height/2,182,200);
  
  //Outer Eye
  fill(255);
   
  //Left E
push();
  translate(width/2.5 +15,height/2.2);
  ellipse(0,0,30,20);
  fill(128,70,27);
  ellipse(0,0,12,12);
  fill(0);
  ellipse(0,0,6,6);
pop();
  //Right E
push();
  translate(width/2.5 +65,height/2.2);
  ellipse(0,0,30,20);
  fill(128,70,27);
  ellipse(0,0,12,12);
  fill(0);
  ellipse(0,0,6,6);
pop();
  
  
  //Mouth
  
  translate(width/2,height/1.8)
  fill(0)
  beginShape();
  curveVertex(30,0);
  curveVertex(0,20);
  curveVertex(-30,0);
  curveVertex(30,0);
  curveVertex(0,20);
  curveVertex(-30,0);
  endShape();
  
 
}