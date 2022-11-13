// Карточки секции "performances".
export const cardsPerfomances = [
  {
    image: '../images/perf-mother.png',
    date: '15 декабря',
    time: '11:00',
    title: 'МАМА3',
    details: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшинаяч',
    info: 'читка проекта Любимовка.Ещё',
  },
  {
    image: '../images/perf-about-lin.png',
    date: '15 декабря',
    time: '11:00',
    title: 'Про линя2',
    details: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшинаяч',
    info: 'читка проекта Любимовка.Ещё',
  },
  {
    image: '../images/perf-mother.png',
    date: '15 декабря',
    time: '11:00',
    title: 'МАМА1',
    details: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшинаяч',
    info: 'читка проекта Любимовка.Ещё',
  },
];

// Шаблон карточки секции "performances".
export const cardPerfomancesTemplate = document.querySelector('#performances__card').content;

// Секция "performances", три карточки.
export const performancesTreeCardsContainer = document.querySelector('.performances__cards_three-cards');