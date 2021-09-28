let slide = document.getElementsByClassName("slide");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let counter = document.getElementById("counter");
let currentSlide = document.getElementById("currentSlide");
let paginationSquare = document.getElementsByClassName("square");

let currentIndex = 0;
let newIndex = 0;

function showCurrentSlide() { // Отображаем номер слайда в дробной пагинации
  currentSlide.textContent = '0' + (newIndex + 1);
};

squares.onclick = function (e) { // Квадратики пагинации
  let target = e.target;
  if (target.classList.contains("square")) {
    newIndex = Number(target.getAttribute("data-index"));
    console.log(newIndex);
    navigateSlider();
  }
}

prevBtn.onclick = function () { // Стрелка влево
  newIndex--;
  navigateSlider();
  showCurrentSlide();
}

nextBtn.onclick = function () { // Стрелка вправо
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

// СЛАЙДЕР ДО-ПОСЛЕ
function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }

  function compareImages(img) {
    var slider, img, clicked = 0,
      w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 1.93) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
    /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);

    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }

    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }

    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }

    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

initComparisons();

// COLORING VOLUME INPUT 
document.getElementById("volumeInput").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.getElementById("progressInput").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + value + '%, #fff ' + value + '%, white 100%)'
};

// BUT TICKETS INPUT COUNTER

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input-bas');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
  if (inputField.value < 0) inputField.value = 0;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
  if (inputField.value > 100) inputField.value = 100;
});





const minusButton1 = document.getElementById('minus1');
const plusButton1 = document.getElementById('plus1');
const inputField1 = document.getElementById('input-sen');

minusButton1.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField1.value) || 0;
  inputField1.value = currentValue - 1;
  if (inputField1.value < 0) inputField1.value = 0;
});

plusButton1.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField1.value) || 0;
  inputField1.value = currentValue + 1;
  if (inputField1.value > 100) inputField1.value = 100;
});


// POP-UP 

const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

clickBtn.addEventListener('click', ()=>{
    popup.style.display = 'block';
});
closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
