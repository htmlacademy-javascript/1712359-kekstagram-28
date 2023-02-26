// //Функция для проверки длины строки
const checkString = (string, count) => !(string.length > count);

checkString('Добрый день', 1);

//Функция для проверки, является ли строка палиндромом
const strPalindrom = 'Лёша на полке клопа нашёл ';
const isUpdateString = (string) => string.replaceAll(' ', '');
const updateString = isUpdateString(strPalindrom);

const isPalindrome = (string) => {
  for(let i = 0; i <= Math.floor(string.length / 2); i++) {
    const numberLastItem = string.length - 1;

    if(string[i].toLowerCase() !== string[numberLastItem - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

isPalindrome(updateString);


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:
const returnsNumber = (string) => {
  let number = '';
  for (let i = 0; i <= string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9 && string[i] !== ' ') {
      number += string[i];
    }
  }

  number = parseInt(number, 10);
  return number;
};

returnsNumber('d5hd 56d46h4 54');

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
//Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца.
const addingString = (string, minLength, addString) => {
  if (string.length < minLength) {
    if ((string.length + addString.length) > minLength) {
      addString = addString.slice(0, (minLength - string.length));
    }
    string = addString + string;
  }
  return string;
};

addingString('q', 4, 'we');
