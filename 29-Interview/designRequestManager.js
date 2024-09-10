const reqManager = (url, options = {}, attemps = 3) => {
  return new Promise((res, rej) => {
    fetch(url, options)
      .then(res)
      .catch((err) => {
        const isLastAttempt = attemps === 1;
        if (isLastAttempt) {
          return rej(err);
        }

        setTimeout(() => {
          reqManager(url, options, attemps - 1)
            .then(res)
            .catch(rej);
        }, 3000);
      });
  });
};

reqManager("https://foo.com").then((res) => {
  console.log(`response ${res}`);
});
