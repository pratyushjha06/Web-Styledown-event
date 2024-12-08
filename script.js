const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000);




function showEvents(eventType) {
    const upcoming = document.getElementById('upcoming-events');
    const past = document.getElementById('past-events');
    const upcomingBtn = document.getElementById('upcoming-btn');
    const pastBtn = document.getElementById('past-btn');

    if (eventType === 'upcoming') {
        upcoming.style.display = 'flex';
        past.style.display = 'none';
        upcomingBtn.classList.add('active');
        pastBtn.classList.remove('active');
    } else {
        past.style.display = 'flex';
        upcoming.style.display = 'none';
        pastBtn.classList.add('active');
        upcomingBtn.classList.remove('active');
    }
}




function openPopup(imgElement) {
    const popupModal = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = imgElement.src;
    popupModal.style.display = 'flex';
}

function closePopup() {
    const popupModal = document.getElementById('image-popup');
    popupModal.style.display = 'none';
}
