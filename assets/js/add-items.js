// document.addEventListener('DOMContentLoaded', () => {
// });

const cardsContainer = document.querySelector('.portfolio__grid');

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
            <h2>${myCard.cardTitle}</h2>
            <p>${myCard.cardDesc}</p>
        </div> 
        `;
    return cardsContainer.appendChild(cardEl);
};

// Загрузка данных
fetch('./assets/data/options.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(myCard => {
            createCard(myCard);
        });
    });
