const PLUS ='+';

let display = document.querySelector('.display');
let firstInput = null;
let secondInput = null;
let operation = null;


let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');

function process(input) {
    if(!Number.isNaN(input)) {
        processInput(input);
    }
}

function processInput(input) {
    if(firstInput == null) {
        firstInput = input;
        display.innerHTML = input + ' ';
    } else if (secondInput == null && operation != null) {
        secondInput = input;
        display.innerHTML += input + ' ';
    }
}

/**
 * All number Buttons 
 */
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');


/**
 * EventHandlers for Numbers
 */
zero.addEventListener('click', () => process(0));
one.addEventListener('click', () => process(1));
two.addEventListener('click', () => process(2));
three.addEventListener('click', () => process(3));
four.addEventListener('click', () => process(4));
five.addEventListener('click', () => process(5));
six.addEventListener('click', () => process(6));
seven.addEventListener('click', () => process(7));
eight.addEventListener('click', () => process(8));
nine.addEventListener('click', () => process(9));

/**
 * Set opertions
 */
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.innerHTML = ''
    firstInput = null;
    secondInput = null;
    operation = null;
})


const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    operation = (a, b) => a + b;
    display.innerHTML += '+' + ' '
});


/**
 * Calculate result if equals is pressed
 */
 const equals = document.querySelector('.equals');
 equals.addEventListener('click', () => {
     if(firstInput != null && secondInput != null && operation != null) {
        display.innerHTML = operation(firstInput, secondInput);
        firstInput = null;
        secondInput = null;
     }
 })


