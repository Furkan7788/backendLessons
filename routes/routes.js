const { getItem, addItem } = require("../controller/testController");

let router = require("express").Router({
  caseSensitive: true,
});

router.get("/item", function (req, res) {
  const itemName = getItem();
  res.send(itemName);
});

router.post("/item", function (req, res) {
  const message = addItem(req.body.itemName)
  res.send(201, message);
});

module.exports = router;
