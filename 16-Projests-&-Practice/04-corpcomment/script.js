// --COUNTER COMPONENT--

const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");

textareaEl.addEventListener("input", () => {
  //   determine max number of characters
  const maxChars = 150;
  // determine current number of characters typed by user
  const neCharsTyped = textareaEl.value.length;

  // calculate no of characters left

  const charsLeft = maxChars - neCharsTyped;

  // display the no of characters left
  counterEl.textContent = charsLeft;
});

// FORM component

const formEl = document.querySelector(".form");

const submitHandler = (e) => {
  //  prevent default behaviour
  e.preventDefault();
  // get text from the text area
  const text = textareaEl.value;
  //validate text
  if (text.includes("#") && text.length >= 5) {
    formEl.classList.add("form--valid");

    setTimeout(() => {
      formEl.classList.remove("form--valid");
    }, 2000);
  } else {
    formEl.classList.add("form--invalid");

    setTimeout(() => {
      formEl.classList.remove("form--invalid");
    }, 2000);
  }
};

formEl.addEventListener("submit", submitHandler);
