// function to calculate total price and grand total
function totalCost() {
    const totalPrice = document.getElementById('total-price');
    const grandTotal = document.getElementById('grand-total');
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalCostAmount = bestPrice + memoryCost + storageCost + deliveryCost;
    totalPrice.innerText = totalCostAmount;
    // Promo
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value;
    const promoCode = 'stevekaku'
    if (promoInputText == promoCode) {
        grandTotal.innerText = totalCostAmount * 0.8;
    } else {
        grandTotal.innerText = totalCostAmount;
    }
    promoInput.value = '';
}

// function to set pricing for the buttons
function setPricing(priceId, amount) {
    document.getElementById(priceId).innerText = amount;
    totalCost()
}

// memory buttons
document.getElementById('memory-low').addEventListener('click', function () {
    setPricing('memory-cost', 0);
})
document.getElementById('memory-high').addEventListener('click', function () {
    setPricing('memory-cost', 180);
})

// storage buttons
document.getElementById('storage-low').addEventListener('click', function () {
    setPricing('storage-cost', 0)
})
document.getElementById('storage-mid').addEventListener('click', function () {
    setPricing('storage-cost', 100)
})
document.getElementById('storage-high').addEventListener('click', function () {
    setPricing('storage-cost', 180)
})

// delivery buttons
document.getElementById('delivery-free').addEventListener('click', function () {
    setPricing('delivery-cost', 0)
})
document.getElementById('delivery-express').addEventListener('click', function () {
    setPricing('delivery-cost', 20);
})

// apply promo button
document.getElementById('apply-promo').addEventListener('click', function () {
    totalCost();
})