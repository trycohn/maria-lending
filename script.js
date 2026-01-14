// 1. Мобильное меню
const burger = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Открыть/закрыть меню при клике на бургер
burger.addEventListener('click', () => {
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
});

// Закрыть меню при клике на ссылку
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });
});

// 2. Плавная прокрутка для всех якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. Увеличение картинок (Модальное окно)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
}

function closeModal() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне картинки
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});