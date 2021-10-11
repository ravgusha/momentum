// BUY TICKETS INPUT COUNTER

let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let inputField = document.getElementById('input-bas');
let permPrice = parseInt(document.getElementById('radioPerm').value)
let tempPrice = parseInt(document.getElementById('radioTemp').value)
let combPrice = parseInt(document.getElementById('radioComb').value)

let totalDiv = document.getElementById("inputPrice");

let total = 0;


minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue - 1;
    if (inputField.value < 0) inputField.value = 0;
    totalPrice();
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
    if (inputField.value > 20) inputField.value = 20;
    totalPrice();
});


const minusButton1 = document.getElementById('minus1');
const plusButton1 = document.getElementById('plus1');
const inputField1 = document.getElementById('input-sen');

minusButton1.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField1.value) || 0;
    inputField1.value = currentValue - 1;
    if (inputField1.value < 0) inputField1.value = 0;
    totalPrice();
});

plusButton1.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField1.value) || 0;
    inputField1.value = currentValue + 1;
    if (inputField1.value > 20) inputField1.value = 20;
    totalPrice();
});


// BUY TICKET PRICE COUNTER

const pricesBasic = {
    permanent: 20,
    temporary: 25,
    combined: 40
};

const pricesSenior = {
    permanent: 10,
    temporary: 12.5,
    combined: 20
};

// SAVING INPUT VALUE

let output = document.querySelector('#input-bas');

document.querySelectorAll('.inpbtn').forEach((el) => {
    el.addEventListener('click', function () {
        var newValue = output.value;
        output.value = newValue;

        var newCost = totalDiv.innerHTML;
        totalDiv.innerHTML = newCost;

        localStorage.setItem('input-bas', newValue);
        localStorage.setItem('totalDiv', newCost);
    });
});

let output1 = document.querySelector('#input-sen');
document.querySelectorAll('.inpbtn1').forEach((el) => {
    el.addEventListener('click', function () {
        var newValue1 = output1.value;
        output1.value = newValue1;

        var newCost = totalDiv.innerHTML;
        totalDiv.innerHTML = newCost;

        // var newRadio = label1.checked;
        // label1.checked = newRadio;

        // var newRadio2 = label2.checked;
        // label2.checked = newRadio2;

        localStorage.setItem('input-sen', newValue1);
        localStorage.setItem('totalDiv', newCost);
        // localStorage.setItem('label1', newRadio);
        // localStorage.setItem('label2', newRadio2);
    });
});

let label1 = document.getElementById('radioPerm');
let label2 = document.getElementById('radioTemp');
let label3 = document.getElementById('radioComb');

var oldValue = localStorage.getItem('input-bas') || 0;
output.value = oldValue;

var oldValue1 = localStorage.getItem('input-sen') || 0;
output1.value = oldValue1;

var oldValue3 = localStorage.getItem('totalDiv') || 0;
totalDiv.innerHTML = oldValue3;


// SAVING RADIO BUTTON VALUES

Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function(item, index) {
  item.addEventListener('click', save);
});

function save() {
  var g1 = document.querySelector('input[name=type]:checked').value;
  localStorage.setItem("g1", g1);
}
function reload() {
  var G1 = Array.from(document.getElementsByName('type'));
  var val1 = localStorage.getItem('g1');
  for (var i = 0; i < G1.length; i++) {
    if (G1[i].value == val1) {
      G1[i].checked = true;
    }
  }
}

reload();

// PRICE COUNTING
document.getElementById('label').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 20 + document.getElementById("input-sen").value * 10;
    document.getElementById("inputPrice").innerHTML = `€${total}`;
})

document.getElementById('label2').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 25 + document.getElementById("input-sen").value * 12.5;
    document.getElementById("inputPrice").innerHTML = `€${total}`;
})

document.getElementById('label3').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 40 + document.getElementById("input-sen").value * 20;
    document.getElementById("inputPrice").innerHTML = `€${total}`
})


function totalPrice() {

    let basic = document.getElementById("input-bas");
    let senior = document.getElementById("input-sen");

    if (document.getElementById("radioPerm").checked == true) {
        total = (basic.value) * permPrice + (((senior.value) * permPrice) / 2);
    }

    if (document.getElementById("radioTemp").checked == true) {
        total = (basic.value) * tempPrice + (((senior.value) * tempPrice) / 2);
    }

    if (document.getElementById("radioComb").checked == true) {
        total = (basic.value) * combPrice + (((senior.value) * tempPrice) / 2);
    }

    totalDiv.innerHTML = `€${total}`;
}




// POP-UP 

const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

clickBtn.addEventListener('click', () => {
    popup.style.left = '0';
});
closeBtn.addEventListener('click', () => {
    popup.style.left = '-6000px';
});

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.left = '-6000px';
    }
}