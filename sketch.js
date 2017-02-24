var selectedBrush = 'sbrush1';
//calculate alpha using mouse speed
//var alpha = map(speed, 0, 20, 0, 3);
var alpha = 5;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  rectMode(CENTER);
  frameRate(30);
  alpha = 5;

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

  //change line width based on mouse speed, less speed more weight
  var lineWidth = map(speed, 0, 10, 5, 0);
  //lineWidth = constrain(lineWidth, 0, 10);

  noStroke();
  fill(0, alpha);
  console.log(alpha);
  rect(width/2, height/2, width, height);

  stroke(red, green, blue, 255);
  strokeWeight(lineWidth);

  ///////////// BRUSHES

  switch (selectedBrush) {
  case "sbrush1":
    brush1(mouseX, mouseY,speed, speed,lineWidth);
    break;
  case "sbrush2":
    brush2(mouseX, mouseY,speed, speed,lineWidth);
    break;
  case "sbrush3":
    brush3(mouseX, mouseY,speed, speed,lineWidth);
    break;
  case "sbrush4":
    brush4(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
    break;
  case "sbrush5":
    brush5(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
    break;
  case "sbrush6":
    brush6(mouseX, mouseY,speed, speed,lineWidth);
    break;
  case "sbrush7":
    brush7(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
    break;
  case "sbrush8":
    brush8(pmouseX, pmouseY, speed, speed,lineWidth,red,green,blue);
    break;
  case "sbrush9":
    brush9(pmouseX, pmouseY, speed, lineWidth);
    break;
  case "sbrush10":
    brush10(pmouseX, pmouseY, speed, lineWidth);
  default:
    brush1(mouseX, mouseY,speed, speed,lineWidth);

  }

  //line(mouseX, mouseY, pmouseX, pmouseY);
  //ellipse(mouseX, mouseY, 5, 5);
  //brush1(mouseX, mouseY,speed, speed,lineWidth);
  //brush2(mouseX, mouseY,speed, speed,lineWidth);
  //brush3(mouseX, mouseY,speed, speed,lineWidth);
  //brush4(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  //brush5(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  //brush6(mouseX, mouseY,speed, speed,lineWidth);
  //brush7(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
  //brush8(pmouseX, pmouseY, speed, speed,lineWidth,red,green,blue);
  //brush9(pmouseX, pmouseY, speed, lineWidth);

  return false;
}
