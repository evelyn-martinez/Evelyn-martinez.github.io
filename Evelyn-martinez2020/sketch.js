function setup() { 
  createCanvas(400, 400);
} 

function draw() {
  background(230);
  animal();
}

function animal() {
  	
  //Left Ear
  fill(102, 51, 0);
  ellipse(150, 40, 40, 40);
  
  
  //Right Ear
  fill(102, 51, 0);
  ellipse(50, 40, 40, 40);
  
  //Head
  fill(102, 51, 0);
  triangle(145 ,10 , 100, 140, 50, 10);
  
   //draw left whiskers
  line(80, 87, 30, 95);
  line(80, 85, 30, 75);
  
  //draw right whiskers
  line(120, 87, 160, 95);
  line(120, 85, 160, 75);
  
  //Left Eyeball
  fill(255);
  ellipse(78, 60, 30, 30);
  
  //Left Iris
  fill(0);
  ellipse(78, 60, 20, 20);
  
  //Right Eyeball
  fill(255);
  ellipse(124,60, 30, 30);
  
  //Right Iris
  fill(0);
  ellipse (124, 60, 20, 20);
  
	//Nose
  fill('red');
  ellipse(100, 150, 20, 20);  
}


