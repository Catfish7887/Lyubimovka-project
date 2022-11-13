export class CardPerfomances {
  constructor(image, date, time, title, details, info, template) {
    this._image = image;
    this._date = date;
    this._time = time;
    this._title = title;
    this._details = details;
    this._info = info;
    this._template = template;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.perf-card__image');
  }

  // Приватный метод возвращает разметку из template.
  _getTemplate() {
    const cardElement = this._template.querySelector('.perf-card').cloneNode(true);

    return cardElement;
  }

  // Публичный метод наполняет разметку входящими данными.
  generateCard() {
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;

    this._element.querySelector('.perf-card__date').textContent = this._date;
    this._element.querySelector('.perf-card__date_time').textContent = this._time;
    this._element.querySelector('.perf-card__title').textContent = this._title;
    this._element.querySelector('.perf-card__details').textContent = this._details
    this._element.querySelector('.perf-card__info').textContent = this._info;

    return this._element;
  }
}
