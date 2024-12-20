const cardsContainer = document.querySelector(".portfolio__tab-cards");

// Создать футер
const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `<p>© Copyright 2024 - KonstBerg.<br />All rights reserved.</p>`;
    return footer;
};

const createCard = (myCard) => {
    const cardInner = document.createElement("li");
    cardInner.classList.add("tab-card", myCard.filterName);
    cardInner.dataset.category = myCard.filterName;
    cardInner.addEventListener("click", () => window.open(myCard.onclick, "_blank"));

    const icons = {
        html: "fa-html5",
        scss: "fa-sass",
        JS: "fa-js",
        WordPress: "fa-wordpress",
        PHP: "fa-php",
        React: "fa-react",
        Vue: "fa-vuejs",
    };

    const iconsHtml = myCard.technologies?.map((tech) => (icons[tech] ? `<div class="icon-box"><i class="fa-brands ${icons[tech]}"></i></div>` : "")).join("") || "";

    const cardContent = `
        <div class="tab-card__wrapper">
            <div class="tab-card__image">
                <img src="${myCard.imgSrc}" alt="${myCard.alt}" loading="lazy">
                <div class="tab-card__icons">
                    ${iconsHtml}
                </div>
            </div>
            <h2 class="tab-card__title">${myCard.cardTitle}</h2>
            <p class="tab-card__desc">${myCard.cardDesc}</p>
        </div>`;

    cardInner.innerHTML = cardContent;
    return cardInner;
};

const toggleCardsVisibility = (isVisible) => {
    cardsContainer.style.display = isVisible ? "flex" : "none";
};

// Скрыть карточки на время загрузки
toggleCardsVisibility(false);

// Загрузка данных
fetch("./assets/data/options.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((myCard) => {
            if (myCard.hasOwnProperty("visibleCard") && myCard.visibleCard === "true") {
                cardsContainer.appendChild(createCard(myCard));
            }
        });

        // Показать карточки после загрузки
        toggleCardsVisibility(true);

        // Добавить футер после карточек
        // const footer = createFooter();
        // document.body.appendChild(footer); // Добавляем футер в конец body
    })
    .catch((error) => {
        console.error("Ошибка загрузки данных:", error);

        // Показать карточки даже в случае ошибки, чтобы не оставлять контейнер скрытым
        toggleCardsVisibility(true);

        // Добавить футер даже при ошибке
        // const footer = createFooter();
        // document.body.appendChild(footer);
    });
