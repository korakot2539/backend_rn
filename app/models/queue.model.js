var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MEMBER = require("./member.model");
var LIST = require("./list.model");

var queueSchema = Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    QUEUE: String,
    UID: String,
    DATE: String,
    TIME: String,
    LIST_ID: String,
    ADMIN_ID: String,
    ADMINDETAIL:{
      NAME:String,
      SURNAME:String
    },
    LISTDETAIL:{
      LIST:String,
      PRICE:String
    },
    STATUS:String
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "QUEUE"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "MEMBER"
var QUEUE = mongoose.model("QUEUE", queueSchema);

module.exports = QUEUE;

