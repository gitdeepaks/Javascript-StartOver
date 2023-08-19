const increaseButtonEl = document.querySelector(".counter__button--increase");
const counterValueEl = document.querySelector(".counter__value");

const decreaseButtonEl = document.querySelector(".counter__button--decrease");

const resetButtonEl = document.querySelector(".counter__reset-button");

const increaseCounter = () => {
  const currentValue = Number(counterValueEl.textContent);
  let newValue = currentValue + 1;

  // check if newValue is greater than 5
  if (newValue > 5) {
    newValue = 5;
  }

  counterValueEl.textContent = newValue;
};

const decreaseCounter = () => {
  const currentValue = Number(counterValueEl.textContent);
  let newValue = currentValue - 1;
  if (newValue <= 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
};

increaseButtonEl.addEventListener("click", increaseCounter);

document.addEventListener("keydown", increaseCounter);

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
