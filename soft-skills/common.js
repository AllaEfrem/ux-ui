let isModalVisible = false;

function modalToggle() {
    if (isModalVisible) {  // здесь проверяется условие видимости модалки
        modal.classList.remove("visible");  // если модалка было отображена, мы её скрываем
    } else {
        modal.classList.add("visible");
    }

    isModalVisible = !isModalVisible;
}

function modalInnerClick(event) {
    event.stopPropagation();
}