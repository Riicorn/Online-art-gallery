document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '❤️ Like') {
                button.textContent = 'Liked!';
                button.classList.add('liked');
            } else {
                button.textContent = '❤️ Like';
                button.classList.remove('liked');
            }
        });
    });

    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('View feature coming soon!'); // Replace with actual view functionality
        });
    });

    // Smooth scrolling for hero button
    const heroButton = document.querySelector('.hero .btn');
    const gallerySection = document.getElementById('gallery');

    heroButton.addEventListener('click', (e) => {
        e.preventDefault();
        gallerySection.scrollIntoView({ behavior: 'smooth' });
    });
});