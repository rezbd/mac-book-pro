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

}

// add event listener to the memory buttons
memoryLow.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0';
})
memoryHigh.addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '180';
})

// add event listener to the storage buttons
storageLow.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
})
storageMid.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
})
storageHigh.addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
})

// add event listener to the delivery buttons
deliveryFree.addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '0';
})
deliveryExpress.addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '20';
})