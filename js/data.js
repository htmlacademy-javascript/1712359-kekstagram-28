import {getRandomInteger, getRandomArrayElement} from './util.js';
import {generateMessage} from './generate-message.js';

const NAMES = [
  'Дарья',
  'Вера',
  'Николай',
  'Дмитрий',
  'Олег',
  'Иван',
  'Александра',
  'Светлана',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Это я',
  'Привет мир',
  'Это я в горах. Сейчас уже дома',
  'Мой кот',
  'На улице весна',
  'А снег идет',
];

const SIMILAR_PHOTO_COUNT = 25;

const createNumberGenerator = () => {
  let id = 0;

  return function () {
    id += 1;
    return id;
  };
};

const generatePhotoId = createNumberGenerator();
const generatePhotoUrl = createNumberGenerator();
const generateCommentId = createNumberGenerator();

const getRandomCommentId = () => {
  const commentId = [];
  while (commentId.length < SIMILAR_PHOTO_COUNT) {
    const randomNumber = Math.ceil(Math.random() * SIMILAR_PHOTO_COUNT);
    let found = false;
    for (let i = 0; i < commentId.length; i++) {
      if (commentId[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) {
      commentId[commentId.length] = randomNumber;
    }
  }
  return commentId;
};
const randomIdComment = getRandomCommentId();

const createComment = () => ({
  id: randomIdComment[generateCommentId()],
  avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
  message: generateMessage(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: createComment(),
});

Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);
