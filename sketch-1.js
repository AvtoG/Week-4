function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
	var y=0
	for (x=0; x<400; x+=10) {
			y=y+10
			ellipse(x,y,10,10)
		
	}
}
