(function(){

	var interval;
	var playButton = document.querySelector(".play");
	var contentWrapper = document.querySelector("#wrapper");
	var player = document.querySelector(".player");
	var closeButton = document.querySelector(".close");
	var fullscreenButton = document.querySelector(".fullscreen");
	var myCanvas = document.querySelector("#defaultCanvas");
	var containerPJS = document.querySelector("#playbox");

	playButton.addEventListener("click", function() {
		
		interval = setInterval(function() {

		if( song ) {
			if( ! song.isPlaying() ) {
				closeAnimation(1000);
			}
		}

	}, 1000);

		Velocity(contentWrapper, { opacity: 0 },  { display: "none", complete: function(){

				song.play();
				Velocity(closeButton, { opacity: 1 }, { display: "block" }, 500);
				Velocity(fullscreenButton, { opacity: 1 }, { display: "block" }, 500);

		} }, 0);
		
	});

	fullscreenButton.addEventListener("click", function() {
		
		var fs = fullscreen();
	  fullscreen(!fs);	
		
	});

	closeButton.addEventListener("click", function () { closeAnimation(1000) });
	
	function closeAnimation(delay_time) {
		
		song.stop();
		fullscreen(false);
		
		clearInterval( interval );

		Velocity(closeButton, { opacity: 0 }, { display: "none" }, 0);
		Velocity(fullscreenButton, { opacity: 0 }, { display: "none" }, 0);
		Velocity(contentWrapper, { opacity: 1 },  { display: "inline-block", delay: delay_time }, 0);

	}
	
})();
