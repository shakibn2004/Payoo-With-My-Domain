getElement('bonus-btn').addEventListener('click', function() {
    if(Number(getValue('coupon')) !== 2026) {
        alert('Please input a valid coupon code')
    }
    else {
        let newBalance = Number(getInnerText('balance')) + Number(getValue('coupon'));
        document.getElementById('balance').innerText = newBalance;
        alert('2026 taka added to your account');
    }
})
document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.replace('./index.html');
})
getElement('cash-out').addEventListener('click', function() {
    window.location.replace('./cash-out.html')
})
getElement('add-money').addEventListener('click', function() {
    window.location.replace('./add-money.html')
})
getElement('transfer-money').addEventListener('click', function() {
    window.location.replace('./transfer-money.html')
})
getElement('pay-bill').addEventListener('click', function() {
    window.location.replace('./pay-bill.html')
})
getElement('transection').addEventListener('click', function() {
    window.location.replace('./transection.html')
})