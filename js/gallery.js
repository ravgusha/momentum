// GALLERY CREATING

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
let result2 = result.toString().replace(/\\"/g,'"').replace(/,/g,' ');

pictureInnerContainer.innerHTML = result2;


// FADE-IN EFFECT
let elementsArray = document.getElementsByClassName("gallery__image");

window.addEventListener('scroll', fadeIn);

function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i]

    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();