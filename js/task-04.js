let counterValue = 0;

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector('span#value');

btnIncrement.addEventListener('click', onBtnIncrementClick);
btnDecrement.addEventListener('click', onBtnDecrementClick);

function updateViewCounter() {
    spanValue.innerHTML = counterValue;
}

function increment() {
    counterValue += 1;
}

function onBtnIncrementClick() {
    increment();
    updateViewCounter();
}

function decrement() {
    counterValue -= 1;
}

function onBtnDecrementClick() {
    decrement();
    updateViewCounter();
}