let slider = document.getElementById("slider");
let slide = document.getElementsByClassName("slide");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let counter = document.getElementById("counter");
let currentSlide = document.getElementById("currentSlide");
let paginationSquare = document.getElementsByClassName("square");


let i = 0;

console.log(currentSlide);
// function getImage() {

//   slide[0].classList.add("active"); // Отображаем первый слайд сразу при загрузке страницы
// }

// getImage();



prevBtn.addEventListener('click', () => {
  slide[i].classList.remove("active");
  paginationSquare[i].classList.remove("active")
  i--;

  if (i < 0) {
    i = slide.length - 1; // При нажатии на стрелку влево на 1 слайде показываем посл.слайд
  }

  slide[i].classList.add("active");
  paginationSquare[i].classList.add("active");
  currentSlideShow();
});


nextBtn.addEventListener('click', () => {
  slide[i].classList.remove("active");
  paginationSquare[i].classList.remove("active")
  i++;

  if (i >= slide.length) {
    i = 0; // При нажатии на стрелку вправо на послед. слайде показываем 1 слайд
  }

  slide[i].classList.add("active");
  paginationSquare[i].classList.add("active");
  currentSlideShow();
});


function currentSlideShow() {

  currentSlide.textContent = '0' + (i+1);

}

