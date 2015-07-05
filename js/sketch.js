var myCanvas;
var song, fft, analyzer;
var r = 0;
var rotate_E = 0;
var axis_Y = 0;
var axis_X = 0;
var position_X = 0;
var ellipse_pulse = 0;
var vol, spectrum;
var vol_scaled = 0;
var rotate_E_dots = 0;
var axis_Y_dots = 0;
var axis_X_dots = 0;
var position_X_dots = 0;
var transX, transY;

// no song is playing variables

var r2 = 0;
var rotate_E2 = 0;
var axis_Y2 = 0;
var axis_X2 = 0;
var position_X2 = 0;
var ellipse_pulse2 = 0;
var spectrum2;

function preload() {

	song = loadSound('assets/hereComesTheSun.mp3'); 

}

function setup() {

	myCanvas = createCanvas(windowWidth, windowHeight);
	background(0);
	noStroke();
	rectMode(CENTER);
	frameRate(30);
	smooth();
	analyzer = new p5.Amplitude();
	analyzer.setInput(song);
	fft = new p5.FFT();
	fft.setInput(song);
	myCanvas.position(0, 0);

}

function draw_rotate_ellipse(rotate_E, axis_Y, position_X) {

	rotate(rotate_E);
	fill(255,255);
	ellipse(position_X, position_X, axis_X, axis_Y);

}

function draw_rotate_dots(rotate_E_dots, axis_Y_dots, position_X_dots) {

	rotate(rotate_E_dots);
	fill(random(255,255),255);
	ellipse(position_X_dots, position_X_dots, axis_X_dots, axis_Y_dots);

}

function draw_pulse(ellipse_pulse) {

	fill(0, 100);
	noStroke();
	ellipse(0, 0, ellipse_pulse*1, ellipse_pulse*1);
	fill(255, 150);
	ellipse(0, 0, ellipse_pulse/3, ellipse_pulse/3);

}

function draw_circle(circle, circle_stroke) {

	stroke(255, 200 );
	strokeWeight(circle_stroke);
	noFill();
	ellipse(0, 0, circle, circle);

}

// no song is playing function

function draw_rotate_ellipse2(rotate_E2, axis_X2, axis_Y2, position_X2) {

	rotate(rotate_E2);
	fill(255,255);
	ellipse(position_X2, position_X2, axis_X2, axis_Y2);

}

function draw() {

	vol = analyzer.getLevel();
	vol_scaled = 1+vol*700;
	spectrum = fft.analyze();

	if (!song.isPlaying()) {

		push();
		translate(random(width), random(height));
		fill(0, 10);
  	rect(0, 0, width, height);
  	spectrum2 = random(100);

		for (var i = 0; i < spectrum2*2 ; i = i + 1) { 	
			position_X2 =  position_X2 + i ;
			var dot_size2 = random(1.5);
			axis_Y2 = dot_size2;
			axis_X2 = dot_size2;
			rotate_E2 =  rotate_E2 + 0.01;
			draw_rotate_ellipse2(rotate_E2, axis_X2, axis_Y2, position_X2);
		}

		spectrum2 = spectrum2  + 1;
		position_X2 = 0;
		pop();

	}

	transX = width/2;
	transY = height/2;
	translate(transX, transY);	

	if (vol > 0) {	

		vol_scaled = 1+vol*700;

	} else {

		vol_scaled = 0;
		spectrum = spectrum - 0.01;

		if (spectrum < 0) {

			spectrum = 0;
			fill(0,255);
			rect(0,0,width/height);

		}

	}

	fill(0, random(20,50));
  rect(0, 0, width, height);

	for (var i = 0; i < spectrum.length * 1 ; i = i + 0.5) {

		var dot_size = random(1);
		position_X_dots =  i  * 1;
		axis_Y_dots = dot_size;
		axis_X_dots = dot_size;
		rotate_E_dots =  rotate_E_dots + 0.000001;
		draw_rotate_dots(rotate_E_dots, axis_Y_dots, position_X_dots);

	}

	for (var i = 0; i < vol_scaled * random(1,5); i = i +  0.5) {

		position_X = vol_scaled * 1 ;
		axis_Y =  i + vol_scaled * 1;
		axis_X =  0.5;
		rotate_E =  vol_scaled;
		draw_rotate_ellipse(rotate_E, axis_Y, position_X);

	}

	draw_pulse(vol_scaled/3);

	if ( random(100) > 80 ) {

		draw_circle(vol_scaled * random(1, 2), (vol_scaled/50));

	}

}

function windowResized() {

	resizeCanvas(windowWidth, windowHeight);
	
}
