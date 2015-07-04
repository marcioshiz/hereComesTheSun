float rotate_1 = 0;
float var_ellipse_X = 0;
float var_ellipse_lenght = 0;
float inputSound = 0;

void setup() {

  size(504, 502);
  background(0);
  noStroke();
  rectMode(CENTER);
  frameRate(30);
  smooth();

}

void draw_rotating_ellipse(float rotateFinal, float transX, float transY, float ellipse_X, float ellipse_lenght, float distanceLine) {

  translate(transX, transY);
  rotate(rotateFinal);
  ellipse(ellipse_X*2, ellipse_X*2, ellipse_lenght*2, distanceLine*2);
  resetMatrix();

}

void draw_circle(float circle, float circle_stroke) {

  stroke(255, 255);
  strokeWeight(circle_stroke*2);
  noFill();
  ellipse(width/2, height/2, circle*2, circle*2);

}

void draw() {

  fill(0, 70);
  noStroke();
  rect(width/2, height/2, width, height);
  fill(255, 200);

  for (float i = 0; i < 60; i = i + 1) {
    noStroke();
    var_ellipse_X =  60 ; 
    var_ellipse_lenght = 1; 
    float var_distanceLine = i;
    draw_rotating_ellipse(rotate_1, width/2, height/2, var_ellipse_X, var_ellipse_lenght, var_distanceLine);
    rotate_1 = rotate_1 + 70;
  }

  i = 0;
  draw_circle(120, 1);
  
}