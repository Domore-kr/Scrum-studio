let intervalId

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0)
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }
        });
    });
});

// Изначально выбраный элемент "Дизайн и проектирование"
var selectedItem = document.getElementById("selectedItem");
selectedItem.classList.add("selected");

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectDropdownItem(element) {
    var currentButton = document.querySelector('.dropdown__button');
    var previousTitle = currentButton.innerText;
    var selectedTitle = element.innerText;

    currentButton.innerText = selectedTitle;
    element.innerText = previousTitle;

    document.getElementById("myDropdown").classList.toggle("show");

    var pricesServicesContainer = document.getElementById("pricesServicesContainer");
    var content = getPricesServicesContent(selectedTitle);
    pricesServicesContainer.innerHTML = content;
}

function getPricesServicesContent(selectedTitle) {
    if (selectedTitle === "Дизайн и проектирование") {
        return `
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн интерфейсов
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        UX-прототипирование
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Miro
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Брендинг и фирменный стиль
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Adobe Photoshop, Adobe Illustrator
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн поддержка
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Notion, Britix 24
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн фирменной продукции
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн интерфейсов
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн интерфейсов
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
    `;
    } else if (selectedTitle === "Веб-разработка") {
        return `
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн интерфейсов
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
    `;
    } else if (selectedTitle === "SEO") {
        return `
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн интерфейсов
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
    `;
    } else if (selectedTitle === "Мобильная разработка") {
        return `
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 class="price_service_head">
                        Дизайн интерфейсов
                        <img src="/svg/Vector 232.svg" alt="">
                    </h3>
                    <p class="price_service_content">
                        Figma, Principle
                    </p>
                </div>
                <div class="price_service_center_content">
                    <p class="price_service_center">Аудит</p>
                    <p class="price_service_center">Дизайн</p>
                    <p class="price_service_center">Аналитика</p>
                </div>
                <div class="price_service_right">
                    50-250 тыс. руб.
                </div>
            </div>
    `;
    } else {
        // Возвращаем пустое содержимое, если название не совпадает с ожидаемыми значениями
        return "";
    }
}