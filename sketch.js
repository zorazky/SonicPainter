function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  rectMode(CENTER);
  frameRate(30);

}

function draw() {
}

function mouseDragged() {

  //based on horizontal position of mouse
  var red = map(mouseX, 0, width, 0, 255);
  // based on vertical position of mouse
  var blue = map(mouseY, 0, width, 0, 255);
  //distance from mouse to canvas center
  var green = dist(mouseX,mouseY,width/2,height/2);
  // calculate distance from mouse movement
  var speed = dist(pmouseX, pmouseY, mouseX,mouseY);
  //calculate alpha using mouse speed
  var alpha = map(speed, 0, 20, 0, 3);
  //change line width based on mouse speed, less speed more weight
  var lineWidth = map(speed, 0, 10, 5, 0);
  //lineWidth = constrain(lineWidth, 0, 10);

  noStroke();
  fill(0, alpha);
  rect(width/2, height/2, width, height);

  stroke(red, green, blue, 255);
  strokeWeight(lineWidth);

  ///////////// BRUSHES

  //line(mouseX, mouseY, pmouseX, pmouseY);
  //ellipse(mouseX, mouseY, 5, 5);
  //brush1(mouseX, mouseY,speed, speed,lineWidth);
  //brush2(mouseX, mouseY,speed, speed,lineWidth);
  //brush3(mouseX, mouseY,speed, speed,lineWidth);
  //brush4(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  //brush5(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  //brush6(mouseX, mouseY,speed, speed,lineWidth);
  //brush7(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  brush8(pmouseX, pmouseY, speed, speed,lineWidth,red,green,blue);

  return false;
}
