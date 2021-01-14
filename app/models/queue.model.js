var mongoose = require("mongoose");

var queueSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    QUEUE: {type: String},
    UID: {type: String},
    DATETIME: {type: String},
    LIST_ID: {type: String},
    ADMIN_ID: {type: String},
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "QUEUE"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "MEMBER"
var QUEUE = mongoose.model("QUEUE", queueSchema);
module.exports = QUEUE;