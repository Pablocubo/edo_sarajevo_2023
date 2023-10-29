// Get references to the button and photo container
const showMoreButton = document.getElementById('show-more-button');
const Container = document.getElementById('container');

// Add an event listener to the button
showMoreButton.addEventListener('click', function () {
    // Get all hidden photos
    const hiddenPhotos = Container.querySelectorAll('.hidden');

    // Loop through hidden photos and toggle their visibility
    hiddenPhotos.forEach(function (photo) {
        photo.classList.toggle('hidden');
    });

    // Update the button text based on the current state
    if (hiddenPhotos.length === 0) {
        showMoreButton.innerText = 'Show Less';
    } else {
        showMoreButton.innerText = 'Show More';
    }
});
