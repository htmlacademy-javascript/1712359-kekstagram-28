// //Функция для проверки длины строки
const isCheckLengthString = (string, length) => string.length <= length;

isCheckLengthString('Привет', 1);

//Функция для проверки, является ли строка палиндромом
const originalString = 'Лёша на полке клопа нашёл ';
const formattingString = (string) => string.replaceAll(' ', '');
const stringPalindrom = formattingString(originalString);

const isPalindrome = (string) => {
  for(let i = 0; i <= Math.floor(string.length / 2); i++) {
    const numberLastItem = string.length - 1;

    if(string[i].toLowerCase() !== string[numberLastItem - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

isPalindrome(stringPalindrom);


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:
const returnsNumbersFromString = (string) => {
  let number = '';
  for (let i = 0; i <= string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9 && string[i] !== ' ') {
      number += string[i];
    }
  }
  number = parseInt(number, 10);
  return number;
};

returnsNumbersFromString('d5hd 56d46h4 54');

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
//Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца.
const padStart = (string, minLength, pad) => {
  while (string.length < minLength) {
    const actualPad = (string.length + pad) < minLength ? pad : pad = pad.slice(0, (minLength - string.length));
    string = actualPad + string;
  }
  return string;
};

padStart('q', 4, 'we');
