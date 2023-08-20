const textareaEl = document.querySelector(".textarea");
const charectersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  //example of input validation
  if (textareaEl.value.includes("<script>")) {
    alert("You can't do that!");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }
  // detetmine new number
  const noofCharecter = textareaEl.value.length;
  const twitterCharEl = 280 - noofCharecter;
  const facebookCharEl = 2200 - noofCharecter;
  let noOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    noOfWords = 0;
  }

  //add visual indicator whan limit is reached
  if (twitterCharEl < 0) {
    twitterNumberEl.classList.add("stat__number--warning");
  } else {
    twitterNumberEl.classList.remove("stat__number--warning");
  }

  if (facebookCharEl < 0) {
    facebookNumberEl.classList.add("stat__number--warning");
  } else {
    facebookNumberEl.classList.remove("stat__number--warning");
  }

  charectersNumberEl.textContent = noofCharecter;
  twitterNumberEl.textContent = twitterCharEl;
  facebookNumberEl.textContent = facebookCharEl;
  wordsNumberEl.textContent = noOfWords;
};

textareaEl.addEventListener("input", inputHandler);
