'use strict';

// hoisting функцій і змінних

console.log(myName); // змінна ще не ініціалізована буде undefined

var myName = "Єгор"; 
console.log(myName); // тепер значення присвоєно як "Єгор"

// функції піднімаються hoisting, тому можна викликати до оголошення
showName(myName);

function showName(name) {
  console.log("Мене звати " + name);
}