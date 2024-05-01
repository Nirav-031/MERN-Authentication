const express = require('express');
const router = express.Router();
const controller=require('../controller/controller.js')

router.post('/verificationMail', controller.verificationMail)
router.get('/register',controller.register)
module.exports=router