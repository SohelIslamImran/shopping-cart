// iPhone Plus Button Event Handler
const iphonePlusBtn = document.getElementById("iphone-plus-btn");
iphonePlusBtn.addEventListener("click", function () {
    QuantityUpdate("iphone-quantity", 1);
    PriceUpdate("iphone-quantity", "iphone-price", 1219, 1219);
})

// iPhone Minus Button Event Handler
const iphoneMinusBtn = document.getElementById("iphone-minus-btn");
iphoneMinusBtn.addEventListener("click", function () {
    QuantityUpdate("iphone-quantity", -1);
    PriceUpdate("iphone-quantity", "iphone-price", 1219, -1219);
})

// iPhone Case Plus Button Event Handler
const casePlusBtn = document.getElementById("case-plus-btn");
casePlusBtn.addEventListener("click", function () {
    QuantityUpdate("case-quantity", 1);
    PriceUpdate("case-quantity", "case-price", 59, 59);
})

// iPhone Case Minus Button Event Handler
const caseMinusBtn = document.getElementById("case-minus-btn");
caseMinusBtn.addEventListener("click", function () {
    QuantityUpdate("case-quantity", -1);
    PriceUpdate("case-quantity", "case-price", 59, -59);
})

// Function For Iphone Quantity Update
function QuantityUpdate(quantityId, added) {
    const currentQuantity = parseFloat(document.getElementById(quantityId).value);
    const updateQuantity = currentQuantity + added;
    document.getElementById(quantityId).value = updateQuantity;
}

// Function For Iphone Price Update
function PriceUpdate(quantityId, priceId, priceOne, priceTow) {
    const currentQuantity = parseFloat(document.getElementById(quantityId).value);
    const updatePrice = currentQuantity * priceOne;
    document.getElementById(priceId).innerText = updatePrice;

    const currentSubtotal = parseFloat(document.getElementById("subtotal").innerText);
    const updateSubtotal = currentSubtotal + priceTow;
    document.getElementById("subtotal").innerText = updateSubtotal;

    const total = parseFloat(document.getElementById("total").innerText);
    const updateTotal = total + priceTow;
    document.getElementById("total").innerText = updateTotal;
}
