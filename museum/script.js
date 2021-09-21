let slider = document.getElementById("slider");
let slide = document.getElementsByClassName("slide");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let counter = document.getElementById("counter");
let currentSlide = document.getElementById("currentSlide");
let paginationSquare = document.getElementsByClassName("square");
// let squares = document.getElementById("squares");

let currentIndex = 0;
let newIndex = 0;

function showCurrentSlide() { // Отображаем номер слайда в дробной пагинации
  currentSlide.textContent = '0' + (newIndex + 1);
};

squares.onclick = function(e) { // Квадратики пагинации
  let target = e.target;
  if (target.classList.contains("square")) {
     newIndex = Number(target.getAttribute("data-index"));
     console.log(newIndex);
     navigateSlider();
  }
}

prevBtn.onclick = function() { // Стрелка влево
  newIndex--;
  navigateSlider();
  showCurrentSlide();
}

nextBtn.onclick = function() { // Стрелка вправо
  newIndex++;
  navigateSlider();
  showCurrentSlide();
}

function navigateSlider() {
  if (newIndex === -1) newIndex = slide.length - 1;
  else if (newIndex === slide.length) newIndex = 0;


  slide[currentIndex].classList.remove("active");
  slide[newIndex].classList.add("active");

  paginationSquare[currentIndex].classList.remove('active');
  paginationSquare[newIndex].classList.add('active');

  currentIndex = newIndex;
  showCurrentSlide();
}
