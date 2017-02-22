function setup() { 
  createCanvas(400, 400);
	
} 



function draw() { 
  background(220);
	
	for (x=0; x<400; x+=10) {
		for(y=0; y<400; y+=10) {
			var c = random(255);
			var d = random(255);
			var e = random(255);
			fill(c,d,e,255)
			ellipse(x,y,10,10)
		}
	}
}
