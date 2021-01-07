var mongoose = require("mongoose");

var adminSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    ADMIN_ID: {type: String},
    USERNAME: {type: String},
    PASSWORD: {type: String},
    NAME: {type: String},
    SURNAME: {type: String},
    NO: {type: String},
    ADDRESS: {type: String},
    NICKNAME: {type: String},
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "ADMIN"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "ADMIN"
var ADMIN = mongoose.model("ADMIN", adminSchema);
module.exports = ADMIN;