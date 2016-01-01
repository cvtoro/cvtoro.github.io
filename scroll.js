
$(function() {


    var elem = $("#downArrow");
    var interval = setInterval(function() {
        if (elem.css('display') == 'none') {
            elem.fadeIn("slow", function() {
                // Animation complete
            });
        } else {
            elem.fadeOut("slow", function() {
                // Animation complete.
            });
        }
    }, 700);

    var scrollTop = $(document).scrollTop();


    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());


    $(document).on('scroll', function() {
        scrollPercent = scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        fade();


    });

    function fade() {
        clearInterval(interval);
        $("#scroll").css("display", "none");

        if (scrollPercent < 1) {
            $("#name").css("opacity", "1.0");
        }

        if (scrollPercent >= 2 && scrollPercent <= 3) {
            $("#name").css("opacity", "0.9");
        }
        if (scrollPercent > 4 && scrollPercent <= 5) {
            $("#name").css("opacity", "0.8");
            $("#downArrow").css("display", "none");

        }
        if (scrollPercent > 5 && scrollPercent <= 6) {
            $("#name").css("opacity", "0.7");
        }
        if (scrollPercent > 6 && scrollPercent <= 7) {
            $("#name").css("opacity", "0.6");
        }
        if (scrollPercent > 7 && scrollPercent <= 8) {
            $("#name").css("opacity", "0.5");
        }
        if (scrollPercent > 8 && scrollPercent <= 9) {
            $("#name").css("opacity", "0.4");
        }
        if (scrollPercent > 9 && scrollPercent <= 10) {
            $("#name").css("opacity", "0.3");
        }
        if (scrollPercent > 10 && scrollPercent <= 11) {
            $("#name").css("opacity", "0.2");
        }
        if (scrollPercent > 11 && scrollPercent <= 13) {
            $("#name").css("opacity", "0.0");
            $("#resume").css("display", "inherit");
        }

        if (scrollPercent > 13 && scrollPercent <= 32) {
            $("#resume").css("opacity", "1.0");
        }
        if (scrollPercent > 32 && scrollPercent <= 33) {
            $("#resume").css("opacity", "0.9");
        }
        if (scrollPercent > 33 && scrollPercent <= 34) {
            $("#resume").css("opacity", "0.8");

        }
        if (scrollPercent > 34 && scrollPercent <= 35) {
            $("#resume").css("opacity", "0.7");
        }
        if (scrollPercent > 35 && scrollPercent <= 36.5) {
            $("#resume").css("opacity", "0.6");
        }
        if (scrollPercent > 36.5 && scrollPercent <= 37.5) {
            $("#resume").css("opacity", "0.5");
        }
        if (scrollPercent > 37.5 && scrollPercent <= 38.5) {
            $("#resume").css("opacity", "0.4");
        }
        if (scrollPercent > 38.5 && scrollPercent <= 39.5) {
            $("#resume").css("opacity", "0.3");
        }

        if (scrollPercent > 39.5 && scrollPercent <= 40) {
            $("#resume").css("opacity", "0.0");
            $("#git").css("display", "inherit");
        }

        if (scrollPercent > 40 && scrollPercent <= 58) {
            $("#git").css("opacity", "1.0");
        }
        if (scrollPercent > 58 && scrollPercent <= 58.5) {
            $("#git").css("opacity", "0.9");
        }
        if (scrollPercent > 58.5 && scrollPercent <= 59.5) {
            $("#git").css("opacity", "0.8");

        }
        if (scrollPercent > 59.5 && scrollPercent <= 60) {
            $("#git").css("opacity", "0.7");
        }
        if (scrollPercent > 60 && scrollPercent <= 60.5) {
            $("#git").css("opacity", "0.6");
        }
        if (scrollPercent > 60.5 && scrollPercent <= 61) {
            $("#git").css("opacity", "0.5");
        }
        if (scrollPercent > 61.5 && scrollPercent <= 62) {
            $("#git").css("opacity", "0.4");
        }
        if (scrollPercent > 62 && scrollPercent <= 62.5) {
            $("#git").css("opacity", "0.3");
        }
        if (scrollPercent > 62.5 && scrollPercent <= 63) {
            $("#git").css("opacity", "0.2");
        }
        if (scrollPercent > 63 && scrollPercent <= 64) {
            $("#git").css("opacity", "0.0");
            $("#contact").css("display", "inherit");
        }


    };


});