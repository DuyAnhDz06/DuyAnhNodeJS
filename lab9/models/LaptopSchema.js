var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var MobileSchema = schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
});

var MobileModel = model("Báo An ninh thủ đô, báo an ninh thế giới", MobileSchema, "mobile");

module.exports = MobileModel;
