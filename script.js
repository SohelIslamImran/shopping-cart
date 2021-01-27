// iPhone Plus Button Event Handler
const iphonePlusBtn = document.getElementById("iphone-plus-btn");
iphonePlusBtn.addEventListener("click", function () {
    sumValue()
    priceIncrease()
})

// iPhone Minus Button Event Handler
const iphoneMinusBtn = document.getElementById("iphone-minus-btn");
iphoneMinusBtn.addEventListener("click", function () {
    deductValue()
    priceIncrease()
})

function sumValue() {
    const currentValue = document.getElementById("iphone-value").value;
    const valueNumber = parseFloat(currentValue);
    const plusValue = valueNumber + 1;
    document.getElementById("iphone-value").value = plusValue;
}

function deductValue() {
    const currentValue = document.getElementById("iphone-value").value;
    const valueNumber = parseFloat(currentValue);
    const minusValue = valueNumber - 1;
    document.getElementById("iphone-value").value = minusValue;
}

function priceIncrease() {
    const currentPrice = document.getElementById("iphone-price").innerText;
    const priceNumber = parseFloat(currentPrice);
    const totalPrice = priceNumber + 1219;
    document.getElementById("iphone-price").innerText = totalPrice;
}


/* // iPhone Case Plus Button Event Handler
const casePlusBtn = document.getElementById("case-plus-btn");
casePlusBtn.addEventListener("click", function () {
    sumValue()
})

// iPhone Case Minus Button Event Handler
const caseMinusBtn = document.getElementById("case-minus-btn");
caseMinusBtn.addEventListener("click", function () {
    deductValue()
})

function sumValue() {
    const currentValue = document.getElementById("case-value").value;
    const valueNumber = parseFloat(currentValue);
    const plusValue = valueNumber + 1;
    document.getElementById("case-value").value = plusValue;
}

function deductValue() {
    const currentValue = document.getElementById("case-value").value;
    const valueNumber = parseFloat(currentValue);
    const minusValue = valueNumber - 1;
    document.getElementById("case-value").value = minusValue;
} */