$(function() {
	var scrollTop = $(document).scrollTop();
	var prevScroll = 0;
	var dir = 'down';
 $("#resume").css("display", "none");
  $("#git").css("display", "none");
  $("#contact").css("display", "none");

	$(document).on('scroll', function() {
	    scrollTop = $(document).scrollTop();

	    if (scrollTop < prevScroll) {
	        dir = 'up';
	    } else {
	        dir = 'down';
	    }
	   
	    prevScroll = scrollTop;
	    
	        fade();
	  

	});

	function fade() {
		if (scrollTop < 20 ) {
	        $("#name").css("opacity", "1.0");
	    }

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


	    if (scrollTop >= 360 && scrollTop <= 380) {
	        $("#resume").css("opacity", "0.9");
	    }
	    if (scrollTop > 400 && scrollTop <= 420) {
	        $("#resume").css("opacity", "0.8");

	    }
	    if (scrollTop > 420 && scrollTop <= 440) {
	        $("#resume").css("opacity", "0.7");
	    }
	    if (scrollTop > 440 && scrollTop <= 460) {
	        $("#resume").css("opacity", "0.6");
	    }
	    if (scrollTop > 460 && scrollTop <= 480) {
	        $("#resume").css("opacity", "0.5");
	    }
	    if (scrollTop > 480 && scrollTop <= 500) {
	        $("#resume").css("opacity", "0.4");
	    }
	    if (scrollTop > 500 && scrollTop <= 520) {
	        $("#resume").css("opacity", "0.3");
	    }
	    if (scrollTop > 520 && scrollTop <= 540) {
	        $("#resume").css("opacity", "0.2");
	    }
	    if (scrollTop > 540 && scrollTop <= 560) {
	        $("#resume").css("opacity", "0.0");
	         $("#git").css("display", "inherit");
	    }

	    if (scrollTop >= 700 && scrollTop <= 720) {
	        $("#git").css("opacity", "0.9");
	    }
	    if (scrollTop > 720 && scrollTop <= 740) {
	        $("#git").css("opacity", "0.8");

	    }
	    if (scrollTop > 740 && scrollTop <= 760 ) {
	        $("#git").css("opacity", "0.7");
	    }
	    if (scrollTop > 780 && scrollTop <= 800) {
	        $("#git").css("opacity", "0.6");
	    }
	    if (scrollTop > 800 && scrollTop <= 820) {
	        $("#git").css("opacity", "0.5");
	    }
	    if (scrollTop > 820 && scrollTop <= 840) {
	        $("#git").css("opacity", "0.4");
	    }
	    if (scrollTop > 840 && scrollTop <= 860) {
	        $("#git").css("opacity", "0.3");
	    }
	    if (scrollTop > 880 && scrollTop <= 900) {
	        $("#git").css("opacity", "0.2");
	    }
	    if (scrollTop > 900 && scrollTop <= 920) {
	        $("#git").css("opacity", "0.0");
	        $("#contact").css("display", "inherit");
	    }


	};

	
});