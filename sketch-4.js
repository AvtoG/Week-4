function setup() { 
  createCanvas(400, 400);
	
} 



function draw() { 
  background(220);
	
	for (x=0; x<400; x+=10) {
		for(y=0; y<400; y+=10) {
			fill(y,x,0)
			ellipse(x,y,10,10)
		}
	}
}
