/**
 * Function to open a tab and set the active class
 * @param {Event} evt - the event triggered by the button click
 * @param {String} tabName - the ID of the tab content to display
 */
function openTab(evt, tabName) {
  // Get all tab content and hide them
  let tabContent = document.getElementsByClassName("tab");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active");
  }

  // Get all tab buttons and remove the 'active' class
  let tabLinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the current tab and add 'active' class to the clicked tab button
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Set default tab to be active on page load
window.onload = function () {
  document.getElementById("tab1").style.display = "block";
};
