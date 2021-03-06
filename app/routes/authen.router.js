var express = require("express");
var router = express.Router();
// var Admin = require("../models/admin.model");
var Member = require("../models/member.model");

// ADMIN LOGIN
// router.post("/adminlogin", (req, res) => {
//   var {USERNAME,PASSWORD} = new Admin(req.body);
//   Admin.findOne({USERNAME}).exec((err, data) => {
//     // console.log(data.PASSWORD);
//     if (data) {
//       if(data.PASSWORD===PASSWORD){
//         return res.status(200).send(data);
//       }
//       return res.status(404).send("Username or Password incorrect.");
//     }else{
//       return res.status(404).send("Username does not exist.");
//     }
//   });
// });

// LOGIN
router.post("/login", (req, res) => {
  var UID = req.body.UID;
  var IDNUMBER = req.body.IDNUMBER;

  Member.findOne({UID}).exec((err, data) => {
    // var json = {"dataID":data.IDNUMBER,"ID":IDNUMBER};
    // return res.status(200).send(json);
    if (data) {
      if(data.IDNUMBER===IDNUMBER){
        return res.status(200).send(data);
      }
      return res.status(404).send("Username or Password incorrect.");
    }else{
      return res.status(404).send("Username does not exist.");
    }
  });
});

module.exports = router;