// document.addEventListener('DOMContentLoaded', () => {
// });

const cardsContainer = document.querySelector('.portfolio__tab-cards');

// Объект для соответствия технологий и классов иконок
// const technologyIcons = {
//     html: 'fa-html5',
//     css: 'fa-css3-alt',
//     JS: 'fa-js',
//     jquery: 'fa-jquery',
//     WordPress: 'fa-wordpress',
//     PHP: 'fa-php'
// };

// Функция для создания элемента
const createCard = (myCard) => {
    const cardEl = document.createElement('li');
    cardEl.classList.add('element-item', myCard.filterName);
    cardEl.dataset.category = myCard.filterName;
    cardEl.addEventListener('click', () => {
        window.open(myCard.onclick, '_blank');
    });

    // Начало формирования HTML-контента
    let cardContent = `
        <div class="card-el">
            <div class="card-images">
                <img src="${myCard.imgSrc}" alt="${myCard.alt}">
                <div class="card-icons">`

    // Добавление иконок, если поле "technologies" присутствует
    if (myCard.hasOwnProperty('technologies')) {
        myCard.technologies.forEach((technology) => {
            if (technology === 'html') {
                cardContent += `
                    <div class="icon-box">
                        <i class="fa-brands fa-html5"></i>
                    </div>`;
            }
            if (technology === 'scss') {
                cardContent += `
                    <div class="icon-box">
                        <i class="fa-brands fa-sass"></i>
                    </div>`;
            }
            if (technology === 'JS') {
                cardContent += `
                    <div class="icon-box">
                        <i class="fa-brands fa-js"></i>
                    </div>`;
            }
            if (technology === 'WordPress') {
                cardContent += `
                    <div class="icon-box">
                        <i class="fa-brands fa-wordpress"></i>
                    </div>`;
            }
            if (technology === 'PHP') {
                cardContent += `
                    <div class="icon-box">
                        <i class="fa-brands fa-php"></i>
                    </div>`;
            }
        });
    };

    // Завершение формирования HTML-контента
    cardContent += `
                </div>
            </div>
                <h2 class="card-title">${myCard.cardTitle}</h2>
                <p>${myCard.cardDesc}</p>
        </div>`;

    // Присваивание HTML-контента элементу
    cardEl.innerHTML = cardContent;
    return cardEl;
};

// Скрыть карточки на время загрузки
cardsContainer.style.display = 'none';

// Загрузка данных
fetch('./assets/data/options.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(myCard => {
            cardsContainer.appendChild(createCard(myCard));
        });
        // Показать карточки после загрузки
        cardsContainer.style.display = 'flex';
    })
    .catch(error => {
        console.error('Ошибка загрузки данных:', error);
        // Показать карточки даже в случае ошибки, чтобы не оставлять контейнер скрытым
        cardsContainer.style.display = 'flex';
    });
