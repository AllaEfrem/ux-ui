let isBurgerClicked = false;

function burgerClick() {
    if (isBurgerClicked) {
        burger.classList.remove("is-active");
    } else {
        burger.classList.add("is-active");
    }

    isBurgerClicked = !isBurgerClicked;
}