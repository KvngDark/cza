let currentIndex = 0;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Função para mover o carrossel
function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Função para mudar a imagem automaticamente
function autoSlide() {
    moveSlide(1); 
}

// Adiciona eventos de clique para navegação manual
prevButton.addEventListener('click', () => {
    moveSlide(-1);
});

nextButton.addEventListener('click', () => {
    moveSlide(1);
});

// Define um intervalo para mudar as imagens automaticamente a cada 2 segundos
setInterval(autoSlide, 5000);
