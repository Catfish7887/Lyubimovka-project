import { CardPerfomances } from '../components/CardPerfomances.js';
import { SectionPerfomances } from '../components/SectionPerfomances.js';
import { Slider1 } from '../components/Slider1.js';

import {
  cardsPerfomances,
  cardPerfomancesTemplate,
  performancesTreeCardsContainer,
} from '../utils/constants.js';

// Создание карточки секции "performances".
function createCardPerfomances(image, date, time, title, details, info) {
  const card = new CardPerfomances(image, date, time, title, details, info, cardPerfomancesTemplate);

  // Вызываем публичный метод генерации карточки.
  const cardElement = card.generateCard();

  // Возвращаем готовую карточку.
  return cardElement;
}

// Добавляем три карточки в секцию "performances".
const addPerfomancesTreeCards = new SectionPerfomances(
  cardsPerfomances,

  // Колбеком передаем функцию генерации карточки в классе Card.
  (cardItem) => {
    // Запускаем функцию создания карточки и добавления на страницу.
    addPerfomancesTreeCards.addItem(createCardPerfomances(cardItem.image, cardItem.date, cardItem.time, cardItem.title, cardItem.details, cardItem.info));
  },
  performancesTreeCardsContainer
);

// Запускаем метод добавления трех карточек в секцию "performances".
addPerfomancesTreeCards.renderItems();

// Добавляем слайдер в секцию "performances", три карточки.
const addSliderPerfomancesThree = new Slider1('.performances__three-cards', '.perf-card', 'perfomances-three', 3)
addSliderPerfomancesThree.setEventListeners();

// Добавляем слайдер в секцию "performances", две карточки.
const addSliderPerfomancesTwo = new Slider1('.performances__two-cards', '.perf-card', 'perfomances-two', 2)
addSliderPerfomancesTwo.setEventListeners();

