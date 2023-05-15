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
}
