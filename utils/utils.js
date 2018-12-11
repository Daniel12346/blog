const moment = require("moment");

const utils = {
  wrap: fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next),
  //functions used to format the post in the views

  timeSince: date => moment(date).fromNow(),
  //shortens the text and adds an ellipsis if it's longer than the set limit
  truncateText: (text, wordLimit = 20) => {
    let words = text.split(" ");
    let trunc = words.slice(0, wordLimit).join(" ");
    trunc += words.length > wordLimit ? "..." : "";
    return trunc;
  }
};

module.exports = utils;
