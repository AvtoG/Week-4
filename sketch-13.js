function setup() { 
  createCanvas(400, 400);
} 

var x=200
var y=200
var x1=8
var y1=5
	
function draw() { 
	background(0)
	ellipse(x,y,30,30)
	ellipse(y,x,30,30)
	x=x+x1
	y=y+y1
	
	if(x>400 || x<0) {
		x1=-x1
	}
	
	if(y>400 || y<0) {
		y1=-y1
	}
	
}
