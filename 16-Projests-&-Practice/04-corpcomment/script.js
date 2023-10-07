// --COUNTER COMPONENT--

const MAX_CHARS = 150;

const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const feedbackListEl = document.querySelector(".feedbacks");
const formEl = document.querySelector(".form");
const submitBtnEl = document.querySelector(".submit-btn");
const spinnerEl = document.querySelector(".spinner");

textareaEl.addEventListener("input", () => {
  //   determine max number of characters
  const maxChars = MAX_CHARS;
  // determine current number of characters typed by user
  const neCharsTyped = textareaEl.value.length;

  // calculate no of characters left

  const charsLeft = maxChars - neCharsTyped;

  // display the no of characters left
  counterEl.textContent = charsLeft;
});

function showVisualIndicator(textCheck) {
  const className = textCheck === "valid" ? "form--valid" : "form--invalid";

  formEl.classList.add(className);
  // remove visual indicator
  setTimeout(() => {
    formEl.classList.remove(className);
  }, 2000);
}

const submitHandler = (e) => {
  //  prevent default behaviour
  e.preventDefault();
  // get text from the text area
  const text = textareaEl.value;
  //validate text
  if (text.includes("#") && text.length >= 5) {
    showVisualIndicator("valid");
  } else {
    showVisualIndicator("invalid");

    //stop function execution
    return;
  }

  // we have text, now extract other info from the text
  const hashTag = text.split(" ").find((word) => word.includes("#"));
  const conpany = hashTag.substring(1);
  const badgLetter = conpany.substring(0, 1).toUpperCase();
  const upvotedCount = 0;
  const daysAgo = 0;

  // new feedback item HTML
  const feetdabItemHTML = `
  <li class="feedback">
    <button class="upvote">
        <i class="fa-solid fa-caret-up upvote__icon"></i>
        <span class="upvote__count">${upvotedCount}</span>
    </button>
    <section class="feedback__badge">
        <p class="feedback__letter">${badgLetter}</p>
    </section>
    <div class="feedback__content">
        <p class="feedback__company">${conpany}</p>
        <p class="feedback__text">${text}</p>
    </div>
    <p class="feedback__date">${daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
</li>
  
  `;

  // insert the new feedback item into the DOM

  feedbackListEl.insertAdjacentHTML("beforeend", feetdabItemHTML);

  // clear the textarea
  textareaEl.value = "";

  // blur the button
  submitBtnEl.blur();

  //reset the counter
  counterEl.textContent = MAX_CHARS;
};

formEl.addEventListener("submit", submitHandler);

// -- FEEDBACK LIST COMPONENT --

fetch("https://bytegrad.com/course-assets/js/1/api/feedbacks")
  .then((result) => result.json())
  .then((data) => {
    // /remove spinner
    spinnerEl.remove();
    //iterate over the data for Each element
    data.feedbacks.forEach((feedbackItm) => {
      const feedbackItemHTML = `<li class="feedback">
    <button class="upvote">
        <i class="fa-solid fa-caret-up upvote__icon"></i>
        <span class="upvote__count">${feedbackItm.upvoteCount}</span>
    </button>
    <section class="feedback__badge">
        <p class="feedback__letter">${feedbackItm.badgeLetter}</p>
    </section>
    <div class="feedback__content">
        <p class="feedback__company">${feedbackItm.company}</p>
        <p class="feedback__text">${feedbackItm.text}</p>
    </div>
    <p class="feedback__date">${
      feedbackItm.daysAgo === 0 ? "New" : `${feedbackItm.daysAgo}`
    }</p>
</li>`;
      feedbackListEl.insertAdjacentHTML("beforeend", feedbackItemHTML);
    });
  });
