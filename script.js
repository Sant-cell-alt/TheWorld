// Menú desplegable (Dropdown)
document.querySelector('#dropdown').addEventListener('mouseover', function () {
    this.querySelector('.dropdown-content').style.display = 'block';
});

document.querySelector('#dropdown').addEventListener('mouseleave', function () {
    this.querySelector('.dropdown-content').style.display = 'none';
});

// Galería de imágenes
let currentImageIndex = 0;
const images = document.querySelectorAll('#galeria img');

setInterval(() => {
    images[currentImageIndex].classList.remove('imagen-activa');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('imagen-activa');
}, 3000);

// Modal
const modal = document.getElementById('modal');
const abrirModal = document.getElementById('abrirModal');
const cerrarModal = document.getElementById('cerrarModal');

abrirModal.addEventListener('click', function () {
    modal.style.display = 'block';
});

cerrarModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

