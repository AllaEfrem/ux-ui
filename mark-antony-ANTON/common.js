let isBurgerClicked = false;
let isModalVisible = false;

function burgerClick() {
    if (isBurgerClicked) {
        burger.classList.remove("is-active");
    } else {
        burger.classList.add("is-active");
    }

    isBurgerClicked = !isBurgerClicked;
}

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