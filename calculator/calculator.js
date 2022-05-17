
let display = document.querySelector('.display');
let firstInput = null;
let secondInput = null;
let operation = null;
let operationString;


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
 * Clear Operation
 */
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.innerHTML = ''
    firstInput = null;
    secondInput = null;
    operation = null;
})

/**
 * Delete Operation
 */
 const deleteBtn = document.querySelector('.delete');
 deleteBtn.addEventListener('click', () => {
     if(secondInput != null) {
         secondInput = null;
         display.innerHTML = firstInput + ' ' + operationString;
     } else if(operation != null){
        operation = null;
        display.innerHTML = firstInput + ' ';
     } else {
         firstInput = null;
         display.innerHTML = '';
     }
 })

/**
 * Plus button
 */
const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    operation = (a, b) => a + b;
    display.innerHTML += '+' + ' '
    operationString = '+';
});

/**
 * Minus button
 */
 const minus = document.querySelector('.minus');
 minus.addEventListener('click', () => {
     operation = (a, b) => a - b;
     display.innerHTML += '-' + ' '
     operationString = '-';
 });

 /**
 * Times button
 */
  const mult = document.querySelector('.mult');
  mult.addEventListener('click', () => {
      operation = (a, b) => a * b;
      display.innerHTML += 'x' + ' '
      operationString = 'x';
  });

  /**
 * Division button
 */
   const division = document.querySelector('.division');
   division.addEventListener('click', () => {
       operation = (a, b) => a / b;
       display.innerHTML += '÷' + ' '
       operationString = '÷';
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
        operation = null;
     }
 })


