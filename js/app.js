// memory buttons
const memoryLow = document.getElementById('memory-low');
const memoryHigh = document.getElementById('memory-high');
// storage buttons
const storageLow = document.getElementById('storage-low');
const storageMid = document.getElementById('storage-mid');
const storageHigh = document.getElementById('storage-high');
// delivery buttons
const deliveryFree = document.getElementById('delivery-free');
const deliveryExpress = document.getElementById('delivery-express');

// all prices
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');

// Promo
const applyPromo = document.getElementById('apply-promo');
const promoInput = document.getElementById('promo-input');

// calculating total price
function totalCost() {
    const bestPriceAmount = parseFloat(bestPrice.innerText);
    const memoryCostAmount = parseFloat(memoryCost.innerText);
    const storageCostAmount = parseFloat(storageCost.innerText);
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);
    const totalCostAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = totalCostAmount;
    // grandTotal.innerText = totalCostAmount;
    // bonus
    const promoInputText = promoInput.value;
    const promoCode = 'stevekaku'
    if (promoInputText == promoCode) {
        grandTotal.innerText = totalCostAmount - (totalCostAmount * 0.2);
    } else {
        grandTotal.innerText = totalCostAmount;
    }
}

// add event listener to the memory buttons
memoryLow.addEventListener('click', function () {
    memoryCost.innerText = '0';
    totalCost();
})
memoryHigh.addEventListener('click', function () {
    memoryCost.innerText = '180';
    totalCost();
})

// add event listener to the storage buttons
storageLow.addEventListener('click', function () {
    storageCost.innerText = '0';
    totalCost();
})
storageMid.addEventListener('click', function () {
    storageCost.innerText = '100';
    totalCost();
})
storageHigh.addEventListener('click', function () {
    storageCost.innerText = '180';
    totalCost();
})

// add event listener to the delivery buttons
deliveryFree.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    totalCost();
})
deliveryExpress.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    totalCost();
})

// add event listener to the promo button

applyPromo.addEventListener('click', function () {
    totalCost();
})