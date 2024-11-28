// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//service section owl carousel
$(".service_owl-carousel").owlCarousel({
    autoplay: true,
    center: true,
    nav: true,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
        },
        991: {
            items: 3
        }
    }
});

// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});






// Get the element to display the animated name
const typewriterName = document.getElementById("typewriter");

// Text to animate
const nameText = "Saubhagya Ranjan Nath";

// Function to create the typewriter effect
function typeWriterEffect(text, element, speed, loop = true) {
    let index = 0; // Keeps track of the character being typed
    let isDeleting = false; // Indicates if the animation is currently deleting
    const typingSpeed = speed || 170; // Speed for typing
    const deletingSpeed = typingSpeed / 3; // Speed for deleting
    const pause = 1000; // Pause after completing or clearing the text

    function type() {
        if (!isDeleting && index <= text.length) {
            // Add the next character
            element.textContent = text.substring(0, index + 1);
            index++;
        } else if (isDeleting && index >= 0) {
            // Remove the last character
            element.textContent = text.substring(0, index);
            index--;
        }

        if (index === text.length && !isDeleting) {
            // Typing complete, pause before deleting
            setTimeout(() => (isDeleting = true), pause);
        } else if (index === 0 && isDeleting) {
            // Deleting complete, pause before typing again
            isDeleting = false;
            if (!loop) return; // Exit if no loop
        }

        // Recursive call for typing and deleting
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type(); // Start the animation
}

// Call the typewriter function
typeWriterEffect(nameText, typewriterName, 150); // Adjust speed as needed







const image = document.getElementById('rotating-image');

    // Define the sequence of border-radius values
    const radiusValues = [
        '50%',                  // Circle
        '50% ',      // Asymmetric oval
        '50% ',      // Opposite asymmetric oval
        '50% ',      // More dramatic oval
        '50%'                   // Back to a circle
    ];

    let currentIndex = 0; // Track the current index in the sequence

    // Function to rotate border-radius
    function rotateBorderRadius() {
        currentIndex = (currentIndex + 1) % radiusValues.length; // Loop through the values
        image.style.borderRadius = radiusValues[currentIndex]; // Apply the new value
    }

    // Set the interval for animation (every 1 second)
    setInterval(rotateBorderRadius, 1000);