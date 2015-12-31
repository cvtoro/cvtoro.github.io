$(function() {
	var scrollTop = $(document).scrollTop();
	var prevScroll = 0;
	var dir = 'down';
 $("#resume").css("display", "none");
  $("#git").css("display", "none");

	$(document).on('scroll', function() {
	    scrollTop = $(document).scrollTop();

	    if (scrollTop < prevScroll) {
	        dir = 'up';
	    } else {
	        dir = 'down';
	    }
	   
	    prevScroll = scrollTop;
	    if (dir == "down") {
	        fadeOut();
	    } else {
	        fadeIn();
	    }

	});

	function fadeOut() {
	    if (scrollTop >= 20 && scrollTop <= 40) {
	        $("#name").css("opacity", "0.9");
	    }
	    if (scrollTop > 40 && scrollTop <= 60) {
	        $("#name").css("opacity", "0.8");
	        $("#downArrow").css("opacity", "0.0");
	    }
	    if (scrollTop > 60 && scrollTop <= 80) {
	        $("#name").css("opacity", "0.7");
	    }
	    if (scrollTop > 80 && scrollTop <= 100) {
	        $("#name").css("opacity", "0.6");
	    }
	    if (scrollTop > 100 && scrollTop <= 120) {
	        $("#name").css("opacity", "0.5");
	    }
	    if (scrollTop > 120 && scrollTop <= 140) {
	        $("#name").css("opacity", "0.4");
	    }
	    if (scrollTop > 140 && scrollTop <= 160) {
	        $("#name").css("opacity", "0.3");
	    }
	    if (scrollTop > 160 && scrollTop <= 180) {
	        $("#name").css("opacity", "0.2");
	    }
	    if (scrollTop > 180 && scrollTop <= 200) {
	        $("#name").css("opacity", "0.0");
	        $("#resume").css("display", "inherit");
	    }


	    if (scrollTop >= 290 && scrollTop <= 310) {
	        $("#resume").css("opacity", "0.9");
	    }
	    if (scrollTop > 310 && scrollTop <= 330) {
	        $("#resume").css("opacity", "0.8");

	    }
	    if (scrollTop > 330 && scrollTop <= 350) {
	        $("#resume").css("opacity", "0.7");
	    }
	    if (scrollTop > 350 && scrollTop <= 370) {
	        $("#resume").css("opacity", "0.6");
	    }
	    if (scrollTop > 370 && scrollTop <= 390) {
	        $("#resume").css("opacity", "0.5");
	    }
	    if (scrollTop > 400 && scrollTop <= 420) {
	        $("#resume").css("opacity", "0.4");
	    }
	    if (scrollTop > 420 && scrollTop <= 440) {
	        $("#resume").css("opacity", "0.3");
	    }
	    if (scrollTop > 440 && scrollTop <= 460) {
	        $("#resume").css("opacity", "0.2");
	    }
	    if (scrollTop > 460 && scrollTop <= 480) {
	        $("#resume").css("opacity", "0.0");
	         $("#git").css("display", "inherit");
	    }

	    if (scrollTop >= 540 && scrollTop <= 560) {
	        $("#git").css("opacity", "0.9");
	    }
	    if (scrollTop > 560 && scrollTop <= 580) {
	        $("#git").css("opacity", "0.8");

	    }
	    if (scrollTop > 580 && scrollTop <= 600) {
	        $("#git").css("opacity", "0.7");
	    }
	    if (scrollTop > 600 && scrollTop <= 620) {
	        $("#git").css("opacity", "0.6");
	    }
	    if (scrollTop > 620 && scrollTop <= 640) {
	        $("#git").css("opacity", "0.5");
	    }
	    if (scrollTop > 640 && scrollTop <= 660) {
	        $("#git").css("opacity", "0.4");
	    }
	    if (scrollTop > 660 && scrollTop <= 680) {
	        $("#git").css("opacity", "0.3");
	    }
	    if (scrollTop > 680 && scrollTop <= 700) {
	        $("#git").css("opacity", "0.2");
	    }
	    if (scrollTop > 700 && scrollTop <= 720) {
	        $("#git").css("opacity", "0.0");
	    }


	};

	function fadeIn() {
	    console.log("fade in");

	};
});