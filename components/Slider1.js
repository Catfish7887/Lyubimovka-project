export class Slider1 {
  constructor(sliderWindow, sliderItem, modificator, numberOfItems) {
    this._sliderLine = document.querySelector(`.slider__line_${modificator}`); // Общий контенейр
    this._sliderLineWidth = document.querySelector(sliderWindow).offsetWidth; // Ширина форточкиб в которой крутятся элементы (слайды).
    this._elementWidth = document.querySelector(sliderItem).offsetWidth; // Ширина одного элемента (слайда).
    this._sliderButtonPrev = document.querySelector(`.slider__button_left-${modificator}`); // Кнопка назад.
    this._sliderButtonNext = document.querySelector(`.slider__button_right-${modificator}`); // Кнопка вперед.
    this._numberOfItems = numberOfItems; // Количество элементов (слайдов) в слайдере.
    this._position = 0 // Задаем стартовую позицию слайда - прижат к левому краю.
    this._totalWidth = this._elementWidth * this._numberOfItems; // Общая ширина контента = ширина одного слайда * количесвто слайдов.
    this._currentWidth = this._sliderLineWidth; // Текущая ширина контента.
  }

  // Навешиваем слушатели.
  setEventListeners() {

    // На кнопку назад.
    this._sliderButtonPrev.addEventListener('click', () => {
      // Если слайд уже первый, то показываем последний.
      if (this._position === 0) {
        this._position = -this._totalWidth + this._elementWidth;
        this._currentWidth = this._totalWidth;
        this._sliderLine.style.left = this._position + "px";
        return;
      }

      this._currentWidth = this._currentWidth - this._elementWidth;
      this._position = this._position + this._elementWidth;

      this._sliderLine.style.left = this._position + "px";
    });

    // На кнопку вперед.
    this._sliderButtonNext.addEventListener('click', () => {
      this._currentWidth = this._currentWidth + this._elementWidth;
      this._position = this._position - this._elementWidth;

      // Если слайд уже последний, то показываем ппервый.
      if (this._currentWidth > this._totalWidth) {
        this._position = 0;
        this._currentWidth = this._sliderLineWidth;
      }

      this._sliderLine.style.left = this._position + "px";
    });
  }


}