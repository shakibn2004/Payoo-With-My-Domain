getElement("add-btn").addEventListener("click", function () {
  if (getValue("bank-account").length !== 17) {
    alert("Please input a valid bank account number");
  } else if (Number(getValue("add-amount")) <= 0) {
    alert("Please input a valid amount");
  } else if (Number(getInnerText("balance")) < Number(getValue("add-amount"))) {
    alert("Please input a amount less than your balance");
  } else if (Number(getValue("add-pin")) !== 20041) {
    document.getElementById('add-pin').value = '';
    alert("Wrong pin");
    
  }
  else {
    let newBalance = Number(getInnerText("balance")) + Number(getValue("add-amount"));
    document.getElementById('balance').innerText = newBalance;
    alert('You have added '+ Number(getValue("add-amount")) + ' taka')
  }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.replace('./index.html');
})
getElement('cash-out').addEventListener('click', function() {
    window.location.replace('./cash-out.html')
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

