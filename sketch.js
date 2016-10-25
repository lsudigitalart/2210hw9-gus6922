var starship1;
var starship2;
var x;
function setup() {
  createCanvas(420, 360);
  noStroke();
  starship1 = new Starship(10, random(10), 72);
  starship2 = new Starship(25, random(10), 72*2);
  starship3 = new Starship(20, random(10), 72*3);
  starship4 = new Starship(15, random(10), 72*4);
  starship5 = new Starship(30, random(10), 72*5);
}

function draw() {
  background(0);
  x=random(width);

  noStroke();

  starship1.display();
  starship1.move();
  starship1.interact();

  starship2.display();
  starship2.move();
  starship2.interact();

  starship3.display();
  starship3.move();
  starship3.interact();

  starship4.display();
  starship4.move();
  starship4.interact();

  starship5.display();
  starship5.move();
  starship5.interact();

  fill(255);
  ellipse(random(width),random(height),2);
  ellipse(random(width),random(height),3);
  ellipse(random(width),random(height),5);
  ellipse(random(width),random(height),1);
  ellipse(random(width),random(height),4);
  ellipse(random(width),random(height),2);
  strokeWeight(random(2));
  stroke(255);
  line(x,0,x,height);



}

function Starship(tempWingspan, tempSpeed, tempXPosition) {

  this.wingspan = tempWingspan;
  this.speed = tempSpeed;
  this.xPosition = tempXPosition;
  this.fillColor = color(random(255), random(255), random(255));
  var boost = 0;

  this.display = function() {
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    ellipse(this.xPosition, boost,this.wingspan*0.50,this.wingspan);
  };

  this.move = function() {
    boost = boost + this.speed;
  };

  this.interact = function() {
    if(mouseX > this.xPosition) {
      boost = 0;
    }

  };


}
