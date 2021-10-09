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

function ticketStartCounter() {
    total = document.getElementById("input-bas").value * 20 + document.getElementById("input-sen").value * 10;
    document.getElementById("inputPrice").innerHTML = `€${total}`
}

window.onload = ticketStartCounter;

document.getElementById('label').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 20 + document.getElementById("input-sen").value * 10;
    document.getElementById("inputPrice").innerHTML = `€${total}`
}) 

document.getElementById('label2').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 25 + document.getElementById("input-sen").value * 12.5;
    document.getElementById("inputPrice").innerHTML = `€${total}`
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

    totalDiv.innerHTML = `€${total}`
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