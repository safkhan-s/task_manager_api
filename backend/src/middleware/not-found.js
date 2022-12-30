function pageNotFound(req, res) {
  res.status(404).send("<h1>Page not Found</h1>");
}

module.exports = pageNotFound;
