// document.addEventListener('DOMContentLoaded', () => {
// });

const cardsContainer = document.querySelector('.portfolio__tab-cards');

const createCard = (myCard) => {
    const cardEl = document.createElement('li');
    cardEl.classList.add('element-item', myCard.filterName);
    cardEl.dataset.category = myCard.filterName;
    cardEl.addEventListener('click', () => window.open(myCard.onclick, '_blank'));

    const icons = {
        html: 'fa-html5',
        scss: 'fa-sass',
        JS: 'fa-js',
        WordPress: 'fa-wordpress',
        PHP: 'fa-php'
    };

    const iconsHtml = myCard.technologies?.map(tech =>
        icons[tech] ? `<div class="icon-box"><i class="fa-brands ${icons[tech]}"></i></div>` : '').join('') || '';

    const cardContent = `
        <div class="card-el">
            <div class="card-images">
                <img src="${myCard.imgSrc}" alt="${myCard.alt}" loading="lazy">
                <div class="card-icons">
                    ${iconsHtml}
                </div>
            </div>
            <h2 class="card-title">${myCard.cardTitle}</h2>
            <p>${myCard.cardDesc}</p>
        </div>`;

    cardEl.innerHTML = cardContent;
    return cardEl;
};

const toggleCardsVisibility = (isVisible) => {
    cardsContainer.style.display = isVisible ? 'flex' : 'none';
};

// Скрыть карточки на время загрузки
toggleCardsVisibility(false);

// Загрузка данных
fetch('./assets/data/options.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(myCard => {
            cardsContainer.appendChild(createCard(myCard));
        });
        // Показать карточки после загрузки
        toggleCardsVisibility(true);
    })
    .catch(error => {
        console.error('Ошибка загрузки данных:', error);
        // Показать карточки даже в случае ошибки, чтобы не оставлять контейнер скрытым
        toggleCardsVisibility(true);
    });