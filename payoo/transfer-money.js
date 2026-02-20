

getElement('transfer-btn').addEventListener('click', function() {
    if (getValue('user-account').length !== 11) {
    alert('Invalid Agent Number');
    return;
}
    else if (Number(getValue('transfer-amount')) <= 0) {
        alert('Please Input Valid Amount');
        return;
    }
    else if (Number(getValue('transfer-pin')) !== 20041) {
        alert('Wrong Pin');
        return;
    }
    else {
        if(Number(getValue('transfer-amount')) > parseInt(getInnerText('balance'))) {
            alert('Invalid transfer Amount');
            return;
        }
        let newBalance = parseInt(getInnerText('balance')) - Number(getValue('transfer-amount'));
        document.getElementById('balance').innerHTML = newBalance;
        alert('You have send '+ Number(getValue('transfer-amount')) + ' taka');
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
getElement('bonus').addEventListener('click', function() {
    window.location.replace('./bonus.html')
})
getElement('pay-bill').addEventListener('click', function() {
    window.location.replace('./pay-bill.html')
})
getElement('transection').addEventListener('click', function() {
    window.location.replace('./transection.html')
})
