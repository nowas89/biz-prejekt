var typed = new Typed('.type', {
    strings: ["zacznijZARABIAC.eu", "Nic nie kosztujący bizness", "Nie wychodząc z domu"],
    typeSpeed: 60,
    showCursor: false,
    loop: true,
    backDelay: 3000
});

// aos
AOS.init();

function changeBg() {
    $('#header').css("background-image", "url('../img/1.png')");

    var imageArray = ['../img/1.png', '../img/2.png',
        '../img/3.png', '../img/4.png'
    ];
    var imageIndex = 0;

    function changeBgImage() {
        var imageUrl = "url('" + imageArray[imageIndex] + "')";
        $('.header').css('background-image', imageUrl);
        imageIndex++;
        if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }

    $(window).on('load', function() { setInterval(changeBgImage, 6000); });

}


(function() {
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        $('.navigation-ham').toggleClass('hidden');

    });
})();




if (matchMedia) {
    const mq = window.matchMedia("(min-width: 750px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        changeBg();
        changePos();
        $('.navigation-ham').css("display", "none");
        $('.navigation-ham').addClass("hidden");
        $('#header').css("background-size:", "calc(100 % +65 px) calc(100 % +65 px)");

    } else {
        // window width is less than 500px

        $('#header').css("background-position", "center");

        $('#header').css("background-image", "url('../img/11111.jpg')");
        $('.hamburger-menu').css("display", "flex");

    }

}

function changePos() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#header").mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#header').css("background-size:", "calc(100 % +65 px) calc(100 % +65 px)");
        $('#header').css("background-position", newvalueX + "px     " + newvalueY + "px");

    });
}
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });


//
//modal

// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}