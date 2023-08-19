const increaseButtonEl = document.querySelector(".counter__button--increase");
const counterValueEl = document.querySelector(".counter__value");

const decreaseButtonEl = document.querySelector(".counter__button--decrease");

const resetButtonEl = document.querySelector(".counter__button--reset");

increaseButtonEl.addEventListener("click", () => {
  const currentValue = Number(counterValueEl.textContent);
  const newValue = currentValue + 1;
  counterValueEl.textContent = newValue;
});

decreaseButtonEl.addEventListener("click", () => {
  const currentValue = Number(counterValueEl.textContent);
  if (currentValue <= 0) {
    return;
  }
  const newValue = currentValue - 1;
  counterValueEl.textContent = newValue;
});

resetButtonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
});
