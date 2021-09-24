const pictureInnerContainer = document.querySelector('.gallery__picture_container');

let paths = [
    `src="assets/img/galery/galery1.jpg"`,
    `src="assets/img/galery/galery2.jpg"`,
    `src="assets/img/galery/galery3.jpg"`,
    `src="assets/img/galery/galery4.jpg"`,
    `src="assets/img/galery/galery5.jpg"`,
    `src="assets/img/galery/galery6.jpg"`,
    `src="assets/img/galery/galery7.jpg"`,
    `src="assets/img/galery/galery8.jpg"`,
    `src="assets/img/galery/galery9.jpg"`,
    `src="assets/img/galery/galery10.jpg"`,
    `src="assets/img/galery/galery11.jpg"`,
    `src="assets/img/galery/galery12.jpg"`,
    `src="assets/img/galery/galery13.jpg"`,
    `src="assets/img/galery/galery14.jpg"`,
    `src="assets/img/galery/galery15.jpg"`,
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(paths);

let result = paths.map(currentValue => `<img class="gallery__image" ${currentValue} alt="gallery">`)
let result2 = result.toString().replace(/\\"/g,'"');

pictureInnerContainer.innerHTML = result2;

