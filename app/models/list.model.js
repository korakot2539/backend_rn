var mongoose = require("mongoose");

var listSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    ID: {type: String},
    LIST: {type: String},
    PRICE: {type: String},
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "LIST"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "ADMIN"
var LIST = mongoose.model("LIST", listSchema);
module.exports = LIST;