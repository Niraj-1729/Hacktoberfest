// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all "View Details" links
    const detailsLinks = document.querySelectorAll('.details-link');

    // Add a click event listener to each link
    detailsLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Change the text of the clicked link
            link.textContent = 'Details Clicked';
        });
    });
});
