window.addEventListener('DOMContentLoaded', function () {
    changeContent('all');
});

function changeContent(category) {
    const tabsContent = document.querySelectorAll('.tabs_content');

    tabsContent.forEach(content => {
        if (content.dataset.category === category) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

function handleTagClick(event) {
    const targetButton = event.target.closest('button');

    if (!targetButton) return; // Игнорируем клики вне кнопок

    const category = targetButton.dataset.category;
    const tabsContent = document.querySelectorAll('.tabs_content');
    const buttons = document.querySelectorAll('.tags button');

    tabsContent.forEach(content => {
        if (content.dataset.category === category) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    buttons.forEach(button => {
        button.classList.remove('tabs__btn_active');
    });

    targetButton.classList.add('tabs__btn_active');
}

