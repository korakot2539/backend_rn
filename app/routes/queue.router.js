var express = require("express");
var router = express.Router();
var Queue = require("../models/queue.model");
var Member = require("../models/member.model");
var List = require("../models/list.model");

var list, admin, queue;
List.find().exec((err, data_list) => {
          list = data_list;
        });
Member.find().exec((err, data_admin) => {
          admin = data_admin;
        });
Queue.find().exec((err, data_queue) => {
          queue = data_queue;
        });

// GET all
router.get("/", (req, res) => {
  Queue.find().exec((err, data) => {
    if (err) {
      return res.status(400).send(err);
    }else{
      for(let i=0; i<data.length;i++){
        for(let j=0; j<list.length;j++){
          if(data[i].LIST_ID===list[j].ID){
            data[i].LISTDETAIL.LIST=list[j].LIST;
            data[i].LISTDETAIL.PRICE=list[j].PRICE;
          }
        }
      }
      for(let i=0; i<data.length;i++){
        for(let j=0; j<admin.length;j++){
          if(data[i].ADMIN_ID===admin[j].UID){
            data[i].ADMINDETAIL.NAME=admin[j].NAME;
            data[i].ADMINDETAIL.SURNAME=admin[j].SURNAME;
          }
        }
      }
      return res.status(200).send(data);
    }
  });
});

// GET 1
router.get("/:QUEUE", (req, res) => {
  var {QUEUE} = req.params;
  Queue.find({QUEUE}).exec((err, data) => {
    if (err) {
            return res.status(400).send(err);
          }else{
            for(let i=0; i<data.length;i++){
              for(let j=0; j<list.length;j++){
                if(data[i].LIST_ID===list[j].ID){
                  data[i].LISTDETAIL.LIST=list[j].LIST;
                  data[i].LISTDETAIL.PRICE=list[j].PRICE;
                }
              }
            }
            for(let i=0; i<data.length;i++){
              for(let j=0; j<admin.length;j++){
                if(data[i].ADMIN_ID===admin[j].UID){
                  data[i].ADMINDETAIL.NAME=admin[j].NAME;
                  data[i].ADMINDETAIL.SURNAME=admin[j].SURNAME;
                }
              }
            }
            return res.status(200).send(data);
    }
  });
});

// GET QUEUE BY USER
router.get("/byuid/:UID", (req, res) => {
  var {UID} = req.params;
  Queue.find({UID})
        .exec((err, data) => {
          if (err) {
            return res.status(400).send(err);
          }else{
            for(let i=0; i<data.length;i++){
              for(let j=0; j<list.length;j++){
                if(data[i].LIST_ID===list[j].ID){
                  data[i].LISTDETAIL.LIST=list[j].LIST;
                  data[i].LISTDETAIL.PRICE=list[j].PRICE;
                }
              }
            }
            for(let i=0; i<data.length;i++){
              for(let j=0; j<admin.length;j++){
                if(data[i].ADMIN_ID===admin[j].UID){
                  data[i].ADMINDETAIL.NAME=admin[j].NAME;
                  data[i].ADMINDETAIL.SURNAME=admin[j].SURNAME;
                }
              }
            }
            return res.status(200).send(data);
          }
        });
});

// GET QUEUE BY USER
router.get("/bydate/:DATE", (req, res) => {
  var {DATE} = req.params;
  // return res.status(200).send({DATE});
  Queue.find({DATE})
        .exec((err, data) => {
          if (err) {
            return res.status(400).send(err);
          }else{
            for(let i=0; i<data.length;i++){
              for(let j=0; j<list.length;j++){
                if(data[i].LIST_ID===list[j].ID){
                  data[i].LISTDETAIL.LIST=list[j].LIST;
                  data[i].LISTDETAIL.PRICE=list[j].PRICE;
                }
              }
            }
            for(let i=0; i<data.length;i++){
              for(let j=0; j<admin.length;j++){
                if(data[i].ADMIN_ID===admin[j].UID){
                  data[i].ADMINDETAIL.NAME=admin[j].NAME;
                  data[i].ADMINDETAIL.SURNAME=admin[j].SURNAME;
                }
              }
            }
            return res.status(200).send(data);
          }
        });
});

// POST (create new data)
router.post("/", (req, res) => {

  var queue_number = queue.length+1;
  var obj = new Queue(req.body);
  obj.QUEUE = queue_number;

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
