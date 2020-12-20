// admin_model.js

var mongoose = require("mongoose");

var adminSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    admin_id: {
      type: Number
    },
    username: {
      type: String
    },
    password: {
      type: String
    },
    name: {
      type: String
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "ADMIN"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;