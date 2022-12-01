let db = [];

exports.addItem = (itemName) => {
  db.push(itemName.substring(3, -1));
  return "Okey";
};

exports.getItemServices = () => {
  return getItems();
};


function getItems() {
    return db
  }
    
  module.exports.getItems = getItems
