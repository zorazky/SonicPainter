
//draws circles
function brush1(x,y, px,py,lineWidth) {
  strokeWeight(lineWidth);
  ellipse(x,y,px,py);

  return false;
};

//random squares
function brush2(x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  push();
  translate(x,y);
  rotate(random(px));
  rect(0+random(50),0+random(50),10,10);
  pop();
  return false;
}

// random lines
function brush3(x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  push();
  translate(x,y);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  pop();

  return false;
}

// mirror lines
function brush4(x,y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  return false;
}

// 8 mirror lines
function brush5(x,y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  line(width/2+((width/2)-py),width/2-((width/2)-px),width/2+((width/2)-y),width/2-((width/2)-x));
  line(height/2-((height/2)-py),width/2-((width/2)-px),height/2-((height/2)-y),width/2-((width/2)-x));
  line(width/2+((width/2)-py),height/2+((height/2)-px),width/2+((width/2)-y),height/2+((height/2)-x));
  line(width/2-((width/2)-py),height/2+((height/2)-px),width/2-((width/2)-y),height/2+((height/2)-x));
  return false;
}

// 8 ellipses
function brush6( x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  px=px+random(50);
  py=py+random(50);
  ellipse(x,y,px,py);
  ellipse(width/2+((width/2)-x),y,px,py);
  ellipse(x,height/2+((height/2)-y),px,py);
  ellipse(width/2+((width/2)-x),height/2+((height/2)-y),px,py);
  ellipse(width/2+((width/2)-y),width/2-((width/2)-x),px,py);
  ellipse(height/2-((height/2)-y),width/2-((width/2)-x),px,py);
  ellipse(width/2+((width/2)-y),height/2+((height/2)-x),px,py);
  ellipse(width/2-((width/2)-y),height/2+((height/2)-x),px,py);
  return false;
}

// simple mirror
function brush7(x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  return false;
}

// my brush
function brush8(x, y, px, py, lineWidth,red, green, blue) {
  strokeWeight(lineWidth);

    //line(x,  y, px + random(-500,500),  py + random(-500,500));
    var a = 0.0;
    var inc = TWO_PI/25.0;
    for (var i = 0; i < 50; i++) {
      //fill(red, green, blue, 255);
      ellipse(x + ((i + random(constrain(px,0,10))) + sin(a)),y + ((i + random(constrain(px,0,10))) + sin(a)),px,py);
      a = a + inc;
    }

  return false;

}


function brush9(x, y, speed, lineWidth) {
  strokeWeight(lineWidth);

  for (var i = 0; i < speed * .01; i++) {
    ellipse(x + random(-100,100), y + random(-100,100), speed * .8, speed * .8);
  }
  return false;




}
