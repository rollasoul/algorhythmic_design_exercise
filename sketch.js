var x;
var y;
var z = 1;
var t = 1;
var counter = 0;


function setup() { 
  createCanvas(400, 400);
  background(0)
} 

function draw() {
  counter ++;
  //create slider tie to mouseY
  if (counter > 10000){
  //background(80, 130, 230, random(1))
    background(0,10);
  }
  push();
  //stroke(120, 180, 230, 20)
  noStroke();
  fill(255, 100)
  //rect(width/2 - 7.5, 50, 15, 300);
  fill(mouseY / 0.7, 25)
  //rect(width/2 - 7.5, 50, 15, 300);
  var y1 = map(mouseY, 0, height, 45, height-100);
  //fill(255, 20);
  //line(30,100, 30, 300);
  noFill();
  //stroke(255, 10*t)
  if (x == width/4 || y == height/4){
  console.log("yo");
  z = random(10);
  t = random(1);
  }
  if (x <= width && y > height/2){
    //noStroke();
    //strokeWeight(1);
    stroke(120, 180, 230, 30)
    //stroke(130, 220, 230)
    fill( 255, 255/x+30)
    fill( 255, 220/ x*(y), 255/ x*(y), 6)
    //upper half
    //for (var i = 0; i < 4; i++){
    triangle(x + 20, y*z, y, x*z, x/2, x);
    triangle(width -x*t, y/z, height, x*t, x/2*t,x/t);
    //rotated upper half
    //triangle(width -x, height -y, x, x*1, width + x/2, width + x);
    //triangle(width, height, 0, x, x/2,x);
    //lower half
    triangle(width - x, height - y*z, height - y, width - x*z, width - x/2, width - x);
    triangle(0 + x*t, height-y/z, 0, width - x*t, width - x/2*t,width - x/t);
    //rotated lower half
    //triangle(width - (x + 20), height - x, height - x, width - x, width - x/2, width - x);
    //triangle(0, height, 0, width - x, width - x/2,width - x);
    x+= 1*y1/100
    //}
  }
    else if (x <= width && y <= height){
      x += x*t;
    	//x -= 2;
      y += 100
    }
    else{
    	background(255, 10);
      x = 10;
      y = 0;
    }
  //background(220); 

}
