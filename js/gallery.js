document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const featuredImage = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnails = gallery.querySelectorAll('ul li img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update the featured image and caption
            featuredImage.src = this.dataset.large;
            caption.textContent = this.dataset.caption;

            // Remove active class from all thumbnails and add to the clicked one
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set the first thumbnail as active by default
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});
