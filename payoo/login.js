let loginId = document.getElementById('login-id');
let loginPin = document.getElementById('login-pin');


document.getElementById('login-btn').addEventListener('click', function() {
    if (loginId.value === '01302230277' && loginPin.value === '20041') {
        // alert('Login Success')
        window.location.assign('./home.html')
    }
    else {
        alert('Login Failed')
    }
})