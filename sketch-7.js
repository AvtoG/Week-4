function setup() { 
  createCanvas(400, 400);
	  background(220);
} 

function draw() { 
	
	for(x=10;x<390;x=x+10){
	for(y=10;y<390;y=y+10){
		line(x,y,x+380,y)
		line(x,y,x,y+380)
	}
}
}
