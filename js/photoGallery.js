function filterGallery(category) {
    const images = document.querySelectorAll('.gallery a');
    images.forEach(image => {
        if (category === 'all' || image.dataset.category === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;
        filterGallery(category);
    });
});
