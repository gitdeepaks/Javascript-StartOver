function debounceFunc(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);

    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

//Usage

const handleResize = debounceFunc(() => {
  console.log("handleResize event");
}, 500);

window.addEventListener("resize", handleResize);
