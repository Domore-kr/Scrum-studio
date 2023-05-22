function changeContent(category) {
    const tabsContent = document.querySelectorAll('.tabs_content');
    const allButton = document.getElementById('allButton');

    tabsContent.forEach(content => {
        if (content.dataset.category === category) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    allButton.classList.remove('tabs__btn_active');
    document.querySelector(`button[data-category="${category}"]`).classList.add('tabs__btn_active');
}

// По умолчанию отображаем только категорию "all" при загрузке страницы
changeContent('all');
