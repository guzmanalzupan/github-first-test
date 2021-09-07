function imgSlider(option) {
    document.querySelector('.pepsi-product').src = "./images/" + option;
}

function changeBgColor(color) {
    const page = document.querySelector('.page');
    page.style.background = color;
}