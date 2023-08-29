function titleToSlug(title) {
  return title.trim().toLowerCase().split(" ").join("-");
}

module.exports = titleToSlug;
