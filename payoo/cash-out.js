

getElement('cashout-btn').addEventListener('click', function() {
    if (getValue('agent-number').length !== 11) {
    alert('Invalid Agent Number');
    return;
}
    else if (Number(getValue('cashout-amount')) <= 0) {
        alert('Please Input Valid Amount');
        return;
    }
    else if (Number(getValue('cashout-pin')) !== 20041) {
        alert('Wrong Pin');
        return;
    }
    else {
        if(Number(getValue('cashout-amount')) > parseInt(getInnerText('balance'))) {
            alert('Invalid Cashout Amount');
            return;
        }
        let newBalance = parseInt(getInnerText('balance')) - Number(getValue('cashout-amount'));
        document.getElementById('balance').innerHTML = newBalance;
        alert('You have withdraw '+ Number(getValue('cashout-amount')) + ' taka');
    }
})

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.replace('./index.html');
})
getElement('add-money').addEventListener('click', function() {
    window.location.replace('./add-money.html')
})
getElement('transfer-money').addEventListener('click', function() {
    window.location.replace('./transfer-money.html')
})
getElement('bonus').addEventListener('click', function() {
    window.location.replace('./bonus.html')
})
getElement('pay-bill').addEventListener('click', function() {
    window.location.replace('./pay-bill.html')
})
getElement('transection').addEventListener('click', function() {
    window.location.replace('./transection.html')
})
