// function for getting value of input
function getValue(id) {
    let valueText = document.getElementById(id);
    let value = valueText.value;
    return value;
}

// function for getting element
function getElement(id) {
    let element = document.getElementById(id);
    return element;
}

// function for getting innertext
function getInnerText(id) {
    let innerText = document.getElementById(id).innerText;
    return innerText;
}