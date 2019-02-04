import * as express from "express";
const router = express.Router();
const controller = require('./controller/message');

router.get("/", controller.getMessageList);


// router.get('/', function (req, res) {
//   console.log('get all messages');
//   res.send("get all messages hoho");
// });

// router.post('/insert', function (req, res) {
//   console.log('insert !');
//   res.send("insert ! hoho ");
// });

module.exports = router;