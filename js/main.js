$(function () {

    $('#navbar').css('display', 'none');
    $('#skills').css('display', 'none');

    var $window = $(window);

    function isInViewport (element) {
        return $window.scrollTop() + $window.height() >= element.offset().top;
    }

    $('body *').each(function() {
        var $this = $(this);

        if (!isInViewport($this)) {
            $this.addClass('hidden');
        }
    });

    $window.scroll(function() {
        var $navbar = $('#navbar');

        if($window.scrollTop() >= 700) {
            $navbar.fadeIn(500);
        }
        if($window.scrollTop() < 700) {
            $navbar.fadeOut(500);
        }

        $('.hidden').each(function() {
            var $this = $(this);

            if (isInViewport($this)) {
                $this.fadeTo(2000, 1);
                $this.removeClass('hidden');
            }
        });
    });

    $('.event').hover(
        function () {
            $(this).css('color', '#239F85');
        },
        function() {
            $(this).css('color', 'white');
        }
    );

    $('#skills-toggle').click(function() {
       $("#skills").slideToggle(500);
    });

    function adjustProjectInfo ($info, descriptionDisplay, width, height, borderTop, borderBottom, degrees) {
        /*var $description = $info.find('.description');
        $description.css('display', descriptionDisplay);*/

        $info.css('width', width);
        $info.css('height', height)
        $info.css('border-top-right-radius', borderTop);
        $info.css('border-bottom-right-radius', borderBottom);

        var $h2 = $info.find('h2');
        $h2.css('-webkit-transform', 'rotate(' + degrees + 'deg)');
        $h2.css('-moz-transform', 'rotate(' + degrees + 'deg)');
        $h2.css('-ms-transform', 'rotate(' + degrees + 'deg)');
        $h2.css('-o-transform', 'rotate(' + degrees + 'deg)');
        $h2.css('transform', 'rotate(' + degrees + 'deg)');
    }

    $('.project').hover(
        function() {
            var $this = $(this);

            if (!$this.is('#slift')) {
                var $info = $this.find('.project-info');
                adjustProjectInfo($info, 'block', '300px', '100.2%', '13px', '13px', 0);
            }
        },
        function() {
            var $this = $(this);

            if (!$this.is('#slift')) {
                var $info = $this.find('.project-info');
                adjustProjectInfo($info, 'none', '50px', '100%', '0px', '0px', -90);
            }
        }
    );

    var icons = [
        ["images/facebook-white.png", "images/facebook-green.png"],
        ["images/twitter-white.png", "images/twitter-green.png"],
        ["images/google_plus-white.png", "images/google_plus-green.png"],
        ["images/linkedin-white.png", "images/linkedin-green.png"]
    ];

    $('#footer').find('a').hover(
        function() {
            var $this = $(this);
            var $img = $this.find('img');
            var icon = icons[$this.index()][0];

            $img.attr('src', icon);
            $img.css('background-color', '#293847');
        },
        function() {
            var $this = $(this);
            var $img = $this.find('img');
            var icon = icons[$this.index()][1];

            $img.attr('src', icon);
            $img.css('background-color', 'transparent');
        }
    );

    var active = true;

    $(window).focus(function() {
        active = true;
    });

    $(window).blur(function() {
       active = false;
    });

    var curr = 0;
    var descriptions = [
        ["Software Engineer", "images/code-green.png"],
        ["Ambitious Learner", "images/a_plus.png"],
        ["Creative Entrepreneur", "images/entrepreneur.png"]
    ];

    setInterval(function () {
        if (active) {
            var $description = $('#description');

            var $text = $description.find('h2');
            var $img = $description.find('img');

            curr = (curr + 1) % descriptions.length;
            var next = descriptions[curr];

            $text.html(next[0]);
            $img.attr('src', next[1]);

            $description.effect("shake", {
                times: 1,
                distance: 10
            }, 300);
        }
    }, 3000);

});
