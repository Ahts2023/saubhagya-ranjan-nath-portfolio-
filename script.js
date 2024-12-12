const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach((button, index) => {
    const detailsParagraph = document.getElementById(`professor-details-${index + 1}`);
    const arrowIcon = button.querySelector('.arrow-icon');

    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle visibility of the corresponding paragraph
        detailsParagraph.classList.toggle('hidden');

        // Update the button state and arrow icon
        if (isExpanded) {
            button.setAttribute('aria-expanded', 'false');
            arrowIcon.classList.remove('rotated'); // Reset arrow to down
        } else {
            button.setAttribute('aria-expanded', 'true');
            arrowIcon.classList.add('rotated'); // Rotate arrow to up
        }
    });
});


// Get the elements
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

// Toggle the "active" class to show/hide navbar links when the button is clicked
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
