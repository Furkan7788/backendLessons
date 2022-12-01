const { getItemServices, addItem, getItems } = require("../services/testServices");

exports.addItem = (name) => {
  if (name.length < 3) return "3'ten büyük gönder";
  addItem(name)
};

exports.getItem = (name) => {
    console.log(getItems())
    return getItemServices()
  };
