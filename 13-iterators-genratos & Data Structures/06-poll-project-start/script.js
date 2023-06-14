const poll = new Map();
poll.set("React", 0);
poll.set("Next", 0);
poll.set("Vue", 0);
poll.set("Angular", 0);
poll.set("Svelte", 0);
poll.set("Other", 0);

function submitForm(e) {
  e.preventDefault();

  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  if (!selectedOption) {
    alert("Please select the option");
    return;
  }

  let votCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, votCount + 1);

  displauResponse();
  //   disable poll fiel after submit

  document
    .getElementById("poll-form")
    .querySelectorAll("input, button")
    .forEach((el) => el.setAttribute("disabled", true));
}

function displauResponse() {
  const results = document.getElementById("results");
  results.innerHTML = "";
  for (let [option, votes] of poll) {
    const optionElement = document.createElement("div");
    optionElement.classList.add(
      "border-bottom",
      "p-2",
      "d-flex",
      "justify-content-between"
    );
    optionElement.innerHTML = `<strong>${option}:</strong> ${votes} votes`;
    results.appendChild(optionElement);
  }
}

document.getElementById("poll-form").addEventListener("submit", submitForm);
