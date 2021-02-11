var mongoose = require("mongoose");

var memberSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    UID: {type: String},
    NAME: {type: String},
    SURNAME: {type: String},
    IDNUMBER: {type: String},
    PHONE: {type: String},
    ADDRESS: {type: String},
    GENDER: {type: String},
    NICKNAME: {type: String},
    CONGENITAL_DISEASE: {type: String},
    HYPERSENSITIVITY_DRUG: {type: String},
    BIRTH_DATE: {type: String},
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "MEMBER"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "MEMBER"
var MEMBER = mongoose.model("MEMBER", memberSchema);
module.exports = MEMBER;