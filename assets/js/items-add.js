// document.addEventListener('DOMContentLoaded', () => {
// });

const cardsContainer = document.querySelector('.portfolio__tab-cards');

// Функция для создания элемента
const createCard = (myCard) => {
    const cardEl = document.createElement('li');
    cardEl.classList.add('element-item', myCard.filterName);
    cardEl.dataset.category = myCard.filterName;
    cardEl.addEventListener('click', () => {
        window.open(myCard.onclick, '_blank');
    });
    cardEl.innerHTML = `
        <div class="card-el">
            <img src="${myCard.imgSrc}" alt="${myCard.alt}">
            <h2 class="card-title">${myCard.cardTitle}</h2>
            <p>${myCard.cardDesc}</p>
        </div> 
    `;
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
