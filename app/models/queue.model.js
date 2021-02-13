var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MEMBER = require("./member.model");
var LIST = require("./list.model");

var queueSchema = Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    QUEUE: String,
    UID: String,
    DATETIME: String,
    LIST_ID: String,
    ADMIN_ID: String,
    USERDETAIL:{
        type: Schema.Types.ObjectId, 
        ref:"MEMBER"
    },
    ADMINDETAIL:{
      type: Schema.Types.ObjectId,
      ref:"MEMBER"
    },
    LISTDETAIL:{
      type: Schema.Types.ObjectId,
      ref:"LIST"
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "QUEUE"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "MEMBER"
var QUEUE = mongoose.model("QUEUE", queueSchema);

module.exports = QUEUE;

