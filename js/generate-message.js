import {getRandomInteger} from './util.js';

const generateMessage = (elements) => {
  const messageOne = elements[getRandomInteger(0, elements.length - 1)];
  const messageTwo = elements[getRandomInteger(0, elements.length - 1)];
  let message;
  if (messageOne === messageTwo) {
    message = messageOne;
  } else {
    message = `${messageOne } ${ messageTwo}`;
  }

  return message;
};
export {generateMessage};
