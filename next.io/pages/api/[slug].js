const { code } = require("./data.json");
export default (req, res) => {
  const codeArticle = code.filter((item) => item.slug === req.query.slug);
  res.status(200).json(codeArticle);
};
