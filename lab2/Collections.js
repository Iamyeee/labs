'use strict';

// Масив контактів з новими іменами та номерами
const contactsArray = [
  { name: "Ivan", phone: +380671234567 },
  { name: "Olena", phone: +380672345678 },
  { name: "Petro", phone: +380673456789 },
  { name: "Sofia", phone: +380674567890 },
  { name: "Dmytro", phone: +380675678901 },
];

// Функція шукає номер за ім'ям у масиві об'єктів
const getPhoneByName = (name) => {
  for (const contact of contactsArray) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
  return "Контакт не знайдено"; // якщо не знайдено
};

console.log(getPhoneByName("Ivan"));
console.log(getPhoneByName("Olena"));
console.log(getPhoneByName("Petro"));
console.log(getPhoneByName("Sofia"));
console.log(getPhoneByName("Dmytro"));
console.log(getPhoneByName("Anna"));

// Реалізація через об'єкт-хеш
const contactsHash = {
  Ivan: "380671234567",
  Olena: "380672345678",
  Petro: "380673456789",
  Sofia: "380674567890",
  Dmytro: "380675678901",
};

// Функція повертає номер за ключем у хеші
const getPhoneFromHash = (name) => contactsHash[name] || "Контакт не знайдено";

console.log(getPhoneFromHash("Ivan"));
console.log(getPhoneFromHash("Olena"));
console.log(getPhoneFromHash("Petro"));
console.log(getPhoneFromHash("Sofia"));
console.log(getPhoneFromHash("Dmytro"));
console.log(getPhoneFromHash("Anna"));