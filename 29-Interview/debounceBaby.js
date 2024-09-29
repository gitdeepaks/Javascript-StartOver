function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// usage
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resize evenet with debounce");
  }, 1000)
);
