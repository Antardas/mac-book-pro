// Text to Number Convert
function textToNumber(elementId) {
    const text = document.getElementById(elementId);
    const number = parseFloat(text.innerText);
    return number;
}

let i = true
// Total Calculate
function total() {

    const totalPrice = document.getElementById('total-price');
    const bestPriceNumber = textToNumber('best-price');
    const memoryCostNumber = textToNumber('memory-cost');
    const storageCostNumber = textToNumber('storage-cost');
    const deliveryCostNumber = textToNumber('delivery-cost');
    const totalPriceNumber = textToNumber('total-price');
    const totalCost = bestPriceNumber + memoryCostNumber + storageCostNumber + deliveryCostNumber;

    totalPrice.innerText = totalCost;
    const discountPrice = document.getElementById('discount-total');
    discountPrice.innerText = totalCost;
    // Used for promo code
    i = true
    return totalCost;
}

// Memory & Total Price Increase
const memoryCost = document.getElementById('memory-cost');

document.getElementById('memory-16GB').addEventListener('click', function () {
    memoryCost.innerText = 180;
    total();

});

document.getElementById('memory-8GB').addEventListener('click', function () {
    memoryCost.innerText = 0;
    total();
});


// Storage 1TB Price Increase
const storageCost = document.getElementById('storage-cost');

document.getElementById('storage-1TB').addEventListener('click', function () {
    storageCost.innerText = 180;
    total();
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    storageCost.innerText = 100;
    total();
})
document.getElementById('storage-256GB').addEventListener('click', function () {
    storageCost.innerText = 0;
    total();
})

// Delivery Section
const deliveryCost = document.getElementById('delivery-cost');

document.getElementById('normal-delivery').addEventListener('click', function () {
    deliveryCost.innerText = 0;
    total();
})
document.getElementById('first-delivery').addEventListener('click', function () {
    deliveryCost.innerText = 20;
    total();
})
// Discount Price

document.getElementById('promo-buttom').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    const discountTotal = document.getElementById('discount-total');
    let discountTotalNumber = parseFloat(discountTotal.innerText);
    if (promoInput.toLowerCase() == 'stevekaku' && i == true) {
        discountTotalNumber = discountTotalNumber / 100 * 20;
        discountTotal.innerText = parseFloat(discountTotal.innerText) - discountTotalNumber;
        i = false;
        document.getElementById('promo-input').value = '';
    }

});