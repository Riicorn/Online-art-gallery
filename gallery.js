document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery');
    const searchBar = document.getElementById('searchBar');
    const categoryFilter = document.getElementById('categoryFilter');

    // Sample art data (replace with your actual data)
    const artworks = [
        { title: 'Nature Scene', category: 'paintings', src: 'nature.jpg', description: 'A beautiful landscape.' },
        { title: 'City Sketch', category: 'sketches', src: 'serenity.jpg', description: 'A detailed city sketch.' },
        { title: 'Starry Night', category: 'digital', src: 'starry.jpg', description: 'A digital rendition of a starry night.' },
        { title: 'Abstract Art', category: 'paintings', src: 'nature.jpg', description: 'Modern abstract art.'},
        { title: 'Forest Sketch', category: 'sketches', src: 'serenity.jpg', description: 'Detailed forest sketch.'},
        { title: 'Digital Landscape', category: 'digital', src: 'starry.jpg', description: 'Digital landscape painting.'}
    ];

    function displayArtworks(filteredArtworks) {
        galleryContainer.innerHTML = ''; // Clear existing artworks

        filteredArtworks.forEach(artwork => {
            const artCard = document.createElement('div');
            artCard.classList.add('art-card');

            const img = document.createElement('img');
            img.src = artwork.src;
            img.alt = artwork.title;

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const viewButton = document.createElement('button');
            viewButton.classList.add('view-btn');
            viewButton.textContent = '🔍 View';
            viewButton.addEventListener('click', () => {
                // Navigate to details page or show modal
                //Example of navigating to a details page.
                window.location.href = `details.html?title=${encodeURIComponent(artwork.title)}&src=${encodeURIComponent(artwork.src)}&description=${encodeURIComponent(artwork.description)}`;
            });

            overlay.appendChild(viewButton);
            artCard.appendChild(img);
            artCard.appendChild(overlay);
            galleryContainer.appendChild(artCard);
        });
    }

    function filterArtworks() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        let filteredArtworks = artworks.filter(artwork => {
            const titleMatch = artwork.title.toLowerCase().includes(searchTerm);
            const categoryMatch = selectedCategory === 'all' || artwork.category === selectedCategory;
            return titleMatch && categoryMatch;
        });

        displayArtworks(filteredArtworks);
    }

    // Initial display
    displayArtworks(artworks);

    // Event listeners
    searchBar.addEventListener('input', filterArtworks);
    categoryFilter.addEventListener('change', filterArtworks);
});