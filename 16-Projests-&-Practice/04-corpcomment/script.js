// --COUNTER COMPONENT--

const MAX_CHARS = 150;
const BASE_API_URL = "https://bytegrad.com/course-assets/js/1/api";

const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const feedbackListEl = document.querySelector(".feedbacks");
const formEl = document.querySelector(".form");
const submitBtnEl = document.querySelector(".submit-btn");
const spinnerEl = document.querySelector(".spinner");

const renderFeedbackItems = (feedbackItm) => {
  const feedbackItemHTML = `
    <li class="feedback">
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
          feedbackItm.daysAgo === 0 ? "New" : `${feedbackItm.daysAgo}d`
        }</p>
    </li>
  `;
  feedbackListEl.insertAdjacentHTML("beforeend", feedbackItemHTML);
};

textareaEl.addEventListener("input", () => {
  const neCharsTyped = textareaEl.value.length;
  const charsLeft = MAX_CHARS - neCharsTyped;
  counterEl.textContent = charsLeft;
});

function showVisualIndicator(textCheck) {
  const className = textCheck === "valid" ? "form--valid" : "form--invalid";
  formEl.classList.add(className);
  setTimeout(() => {
    formEl.classList.remove(className);
  }, 2000);
}

const submitHandler = (e) => {
  e.preventDefault();
  const text = textareaEl.value;
  if (text.includes("#") && text.length >= 5) {
    showVisualIndicator("valid");
  } else {
    showVisualIndicator("invalid");
    return;
  }

  const hashTag = text.split(" ").find((word) => word.includes("#"));
  const company = hashTag.substring(1);
  const badgeLetter = company.substring(0, 1).toUpperCase();

  const feedbackItm = {
    upvoteCount: 0,
    badgeLetter,
    company,
    text,
    daysAgo: 0,
  };

  renderFeedbackItems(feedbackItm);

  fetch(`${BASE_API_URL}/feedbacks`, {
    method: "POST",
    body: JSON.stringify(feedbackItm),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to send feedback to server");
      } else {
        console.log("Feedback sent to server");
      }
    })
    .catch((err) => console.log(err));

  textareaEl.value = "";
  submitBtnEl.blur();
  counterEl.textContent = MAX_CHARS;
};

formEl.addEventListener("submit", submitHandler);

// -- FEEDBACK LIST COMPONENT --

fetch(`${BASE_API_URL}/feedbacks`)
  .then((result) => result.json())
  .then((data) => {
    spinnerEl.remove();
    data.feedbacks.forEach((feedbackItm) => {
      renderFeedbackItems(feedbackItm);
    });
  })
  .catch((err) => {
    feedbackListEl.textContent = `Failed to load feedbacks. Error: ${err}`;
  });
