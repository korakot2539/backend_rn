var express = require("express");
var router = express.Router();
var Queue = require("../models/queue.model");
var Member = require("../models/member.model");
var List = require("../models/list.model");

// GET all
router.get("/", (req, res) => {
  Queue.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:QUEUE", (req, res) => {
  var {QUEUE} = req.params;
  Queue.findOne({QUEUE}).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET QUEUE BY USER
router.get("/byuid/:UID", (req, res) => {
  var {UID} = req.params;
  Queue.find({UID})
        // .populate("USERDETAIL ADMINDETAIL")
        // .populate([
        //   {Path:"USERDETAIL ",model:"MEMBER"},
        //   {Path:"ADMINDETAIL",model:"MEMBER"}
        // ])
        .exec((err, data) => {
          if (err) return res.status(400).send(err);
          return res.status(200).send(data);
        });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Queue(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/:QUEUE", (req, res) => {
  var {QUEUE} = req.params;
  Queue.findOneAndUpdate({QUEUE}, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/:QUEUE", (req, res) => {
  var {QUEUE} = req.params;
  Queue.findOneAndDelete({QUEUE}, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;