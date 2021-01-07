var express = require("express");
var router = express.Router();
var Admin = require("../models/admin.model");

// GET all
router.get("/", (req, res) => {
  Admin.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:ADMIN_ID", (req, res) => {
  var {ADMIN_ID} = req.params;
  Admin.findOne({ADMIN_ID}).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/", (req, res) => {
  var obj = new Admin(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/:ADMIN_ID", (req, res) => {
  var {ADMIN_ID} = req.params;
  Admin.findOneAndUpdate({ADMIN_ID}, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/:ADMIN_ID", (req, res) => {
  var {ADMIN_ID} = req.params;
  Admin.findOneAndDelete({ADMIN_ID}, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;