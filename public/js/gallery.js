document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/gallery')
    .then(response => response.json())
    .then(data => displayGalleryItems(data))
    .catch(error => console.error('Error fetching gallery items:', error));
});

function displayGalleryItems(items) {
    const container = document.getElementById('galleryContainer');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'polaroid';
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <h3>${item.title}</h3>
        `;

        itemElement.onclick = () => {
            showDetails(item);
        };

        container.appendChild(itemElement);
    });
}


function showDetails(item) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h5>${item.title}</h5>
        <img src="${item.imageUrl}" alt="${item.title}" class="img-fluid mb-2">
        <p>${item.description}</p>
        <p>Taken by: ${item.photographerName}</p>
    `;
    $('#uploadModal').modal('show');
}