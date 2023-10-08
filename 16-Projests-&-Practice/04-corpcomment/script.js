// Constants
const MAX_CHARS = 150;
const BASE_API_URL = "https://bytegrad.com/course-assets/js/1/api";

// DOM Element References
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const feedbackListEl = document.querySelector(".feedbacks");
const formEl = document.querySelector(".form");
const submitBtnEl = document.querySelector(".submit-btn");
const spinnerEl = document.querySelector(".spinner");
const hashTagListEl = document.querySelector(".hashtags");

// Renders feedback items to the DOM
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

// Updates character counter
textareaEl.addEventListener("input", () => {
  const charsTyped = textareaEl.value.length;
  const charsLeft = MAX_CHARS - charsTyped;
  counterEl.textContent = charsLeft;
});

// Shows visual indication based on form validity
function showVisualIndicator(isValid) {
  const className = isValid ? "form--valid" : "form--invalid";
  formEl.classList.add(className);
  setTimeout(() => {
    formEl.classList.remove(className);
  }, 2000);
}

// Handles form submission
const submitHandler = (e) => {
  e.preventDefault();
  const text = textareaEl.value;
  if (text.includes("#") && text.length >= 5) {
    showVisualIndicator(true);
  } else {
    showVisualIndicator(false);
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

  // Send feedback to server
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
      }
      console.log("Feedback sent to server");
    })
    .catch((err) => console.log(err));

  textareaEl.value = "";
  submitBtnEl.blur();
  counterEl.textContent = MAX_CHARS;
};

formEl.addEventListener("submit", submitHandler);

// Handles feedback list interactions
const clickHandler = (e) => {
  const clickedEl = e.target;
  if (clickedEl.closest(".upvote")) {
    const upvoteBtn = clickedEl.closest(".upvote");
    upvoteBtn.disabled = true;
    const upvoteCountEl = upvoteBtn.querySelector(".upvote__count");
    upvoteCountEl.textContent = Number(upvoteCountEl.textContent) + 1;
  } else if (clickedEl.closest(".feedback")) {
    clickedEl.closest(".feedback").classList.toggle("feedback--expand");
  }
};

feedbackListEl.addEventListener("click", clickHandler);

// Fetch and display feedbacks
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

// --HashTAG LIST COMPONENT--

const clickHandler2 = (e) => {
  // Get the clicked element
  const clickedEl = e.target;

  // Stop function if the clicked element is not a button
  if (!clickedEl.classList.contains("hashtags")) return;

  // Extract company name from the clicked element
  const companyNameFromHashTag = clickedEl.textContent
    .substring(1)
    .toLowerCase()
    .trim();

  // Iterate over all feedbacks
  feedbackListEl.childNodes.forEach((childNode) => {
    // Stop the iteration if it's not an element node
    if (childNode.nodeType !== 1) return;

    // Extract company name from the feedback
    const companyNameFromFeedbackItem = childNode
      .querySelector(".feedback__company")
      .textContent.toLowerCase()
      .trim();

    // Hide the feedback if the company name does not match
    if (companyNameFromHashTag !== companyNameFromFeedbackItem) {
      childNode.style.display = "none";
    } else {
      childNode.style.display = "";
    }
  });
};

hashTagListEl.addEventListener("click", clickHandler2);
