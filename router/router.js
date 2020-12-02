const express = require('express');
const controller = require("../controllers/controller.js");
let router = express.Router();



// =====================================================================
// 

router.get('/',controller.main);
router.post('/read', controller.read);
router.post('/content', controller.content);
router.post('/saveFile', controller.saveFile)
router.get('/home', controller.sendFile);

module.exports = router;