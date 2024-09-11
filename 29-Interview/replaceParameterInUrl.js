// const initialUrl = "/posts/:postId/comments/:commentId";

// const resultUrl = replaceParamsInUrl(initialUrl, [
//   { from: "postId", to: "1" },
//   { from: "commentId", to: "3" },
// ]);

const replecaeParamsinUrl = (url, replacements) => {
  return replacements.reduce((acc, replacement) => {
    url = url.replace(":" + replacement.from, replacement.to);
    return url;
  }, url);
};
const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replecaeParamsinUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);

console.log(resultUrl);
