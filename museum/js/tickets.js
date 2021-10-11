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
let output1 = document.querySelector('#input-sen');
let output2 = document.querySelector('#paymentNumber');
let output3 = document.querySelector('#paymentNumber2');

document.querySelectorAll('.inpbtn').forEach((el) => {
    el.addEventListener('click', function () {
        var newValue = output.value;
        output.value = newValue;

        var newCost = totalDiv.innerHTML;
        totalDiv.innerHTML = newCost;

        localStorage.setItem('input-bas', newValue);
        localStorage.setItem('totalDiv', newCost);
        // localStorage.setItem('paymentNumber', newValue);
    });
});


document.querySelectorAll('.inpbtn1').forEach((el) => {
    el.addEventListener('click', function () {
        var newValue1 = output1.value;
        output1.value = newValue1;

        var newCost = totalDiv.innerHTML;
        totalDiv.innerHTML = newCost;

        localStorage.setItem('input-sen', newValue1);
        localStorage.setItem('totalDiv', newCost);
        // localStorage.setItem('paymentNumber2', newValue1);
    });
});

let label1 = document.getElementById('radioPerm');
let label2 = document.getElementById('radioTemp');
let label3 = document.getElementById('radioComb');

var oldValue = localStorage.getItem('input-bas') || 0;
output.value = oldValue;

var oldValue1 = localStorage.getItem('input-sen') || 0;
output1.value = oldValue1;

// var oldValue2 = localStorage.getItem('paymentNumber') || 0;
// output2.innerHTML = oldValue2;

// var oldValue3 = localStorage.getItem('totalDiv') || 0;
// totalDiv.innerHTML = oldValue3;

// var oldValue4 = localStorage.getItem('paymentNumber2') || 0;
// output3.innerHTML = oldValue4;


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

    //   Counting total sum after refresh
      totalDiv.innerHTML =  oldValue * G1[i].value + ((oldValue1 *G1[i].value)/2); 
    }
  }
}

reload();

// SETTING POP-UP VALUES 
let basicInput = document.getElementById('basicInput');
let seniorInput = document.getElementById('seniorInput');

document.getElementById('clickBtn').addEventListener ('click', () => {
 output2.innerHTML = inputField.value;
 output3.innerHTML = inputField1.value;
 basicInput.value = inputField.value;
 seniorInput.value = inputField1.value;
 document.getElementById("totalNumber").innerHTML = totalDiv.innerHTML + `€`;
 document.getElementById("popupType").value = document.querySelector('input[name=type]:checked').parentElement.textContent;
})


// function setSelectBoxByText(eid, etxt) {
//     var eid = document.getElementById(eid);
//     var etxt = 
//     for (var i = 0; i < eid.options.length; ++i) {
//         if (eid.options[i].text === etxt)
//             eid.options[i].selected = true;
//     }
// }


console.log(document.querySelector('input[name=type]:checked').parentElement.textContent);













// PRICE COUNTING
document.getElementById('label').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 20 + document.getElementById("input-sen").value * 10;
    totalDiv.innerHTML = `${total}`;
    // document.getElementById("totalNumber").innerHTML = `€${total}`;
})

document.getElementById('label2').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 25 + document.getElementById("input-sen").value * 12.5;
    totalDiv.innerHTML = `${total}`;
    // document.getElementById("totalNumber").innerHTML = `€${total}`;
})

document.getElementById('label3').addEventListener('click', () => {
    total = document.getElementById("input-bas").value * 40 + document.getElementById("input-sen").value * 20;
    totalDiv.innerHTML = `${total}`;
    // document.getElementById("totalNumber").innerHTML = `€${total}`;
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

    totalDiv.innerHTML = `${total}`;
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