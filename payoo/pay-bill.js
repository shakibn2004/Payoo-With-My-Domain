getElement("bill-btn").addEventListener("click", function () {
  if (getValue("bill-account").length !== 17) {
    alert("Please input a valid bill account number");
  } else if (Number(getValue("bill-amount")) <= 0) {
    alert("Please input a valid amount");
  } else if (Number(getInnerText("balance")) < Number(getValue("bill-amount"))) {
    alert("Please input a amount less than your balance");
  } else if (Number(getValue("bill-pin")) !== 20041) {
    document.getElementById('bill-pin').value = '';
    alert("Wrong pin");
    
  }
  else {
    let newBalance = Number(getInnerText("balance")) - Number(getValue("bill-amount"));
    document.getElementById('balance').innerText = newBalance;
    alert('Your bill '+ Number(getValue("bill-amount")) + ' taka successfully paid')
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
getElement('add-money').addEventListener('click', function() {
    window.location.replace('./add-money.html')
})
getElement('transection').addEventListener('click', function() {
    window.location.replace('./transection.html')
})