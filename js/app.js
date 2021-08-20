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
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');

// calculating total price
function totalCost() {
    const bestPriceAmount = parseFloat(bestPrice.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostAmount = parseFloat(memoryCost.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostAmount = parseFloat(storageCost.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);
    const totalCostAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = totalCostAmount;
}

// add event listener to the memory buttons
memoryLow.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0';
    totalCost();
})
memoryHigh.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '180';
    totalCost();
})

// add event listener to the storage buttons
storageLow.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
    totalCost();
})
storageMid.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
    totalCost();
})
storageHigh.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    totalCost();
})

// add event listener to the delivery buttons
deliveryFree.addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '0';
    totalCost();
})
deliveryExpress.addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '20';
    totalCost();
})