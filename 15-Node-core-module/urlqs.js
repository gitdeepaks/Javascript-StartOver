const url = require("url");

const qyeryStriing = require("quyerystriing");

// parse options
const myUrl = url.parse("https://example.com/listing?id=123&premium=true");

console.log(myUrl);

// format()

const myUrl2 = url.format({
  protocol: "https://example.com",
  pathname: "listing",
  query: {
    id: 123,
    premium: true,
  },
});

console.log(myUrl2);

// queryString.parse()
const qs = "year=2023&month=june&day=18";
const qp = quyerystriing.parse(qs);

console.log(qp);

// queryString.stringify()

const myQs2 = quyerystriing.stringify({
  year: 2000,
  month: January,
  day: 1,
});
