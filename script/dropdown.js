function drop(event) {
    event.stopPropagation();
    const menu = event.currentTarget.dataset.path;
    const targetMenu = document.querySelector(`[data-target=${menu}]`);

    if (!targetMenu.classList.contains('open')) {
        targetMenu.classList.add('menu-active');
        targetMenu.classList.add('open');
    } else {
        targetMenu.classList.remove('menu-active');
        targetMenu.classList.remove('open');
    }
}


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
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="one"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="one" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="two"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="two" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="three"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="three" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="four"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="four" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="five"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="five" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="six"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="six" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="seven"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="seven" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
    `;
    } else if (selectedTitle === "Веб-разработка") {
        return `
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="one"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="one" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="two"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="two" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="three"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="three" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="four"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="four" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="five"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="five" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="six"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="six" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="seven"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="seven" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
    `;
    } else if (selectedTitle === "SEO") {
        return `
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="one"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="one" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="two"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="two" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="three"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="three" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="four"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="four" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="five"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="five" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="six"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="six" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="seven"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="seven" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
    `;
    } else if (selectedTitle === "Мобильная разработка") {
        return `
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="one"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="one" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="two"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="two" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="three"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="three" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="four"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="four" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="five"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="five" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="six"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="six" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
        <div class="price_services_dropdown_container">
            <div class="price_service">
                <div class="price_service_head_content">
                    <h3 onclick="drop(event)" data-path="seven"
                        class="price_service_head btn btn-secondary dropdown-toggle">
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
            <ul data-target="seven" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Prodact Manager</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Разработка технического задания</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Ux/Ui Designer</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">
                            Разработка дизайна сайта Возможно будет
                            предложено шаблонное решение.
                        </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Подготовка программной среды - хостинг, CMS
                            1С-Битрикс</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Front-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Верстка сайта</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Back-end разработчик</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Back-end разработка сайта </p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
                <li class="price_service dropdown-menu_item">
                    <div class="price_service_head_content_dropdown">
                        <h3 class="dropdown-menu_item_head">Контент-менеджер</h3>
                        <p class="price_service_content_dropdown">
                            2000 руб./час
                        </p>
                    </div>
                    <div class="price_service_center_content_dropdown">
                        <p class="price_service_center_dropdown">Текстово-графическое наполнение</p>
                    </div>
                    <div class="price_service_right_dropdown">
                        9 тыс. руб.
                    </div>
                </li>
            </ul>
        </div>
    `;
    } else {
        // Возвращаем пустое содержимое, если название не совпадает с ожидаемыми значениями
        return "";
    }
}