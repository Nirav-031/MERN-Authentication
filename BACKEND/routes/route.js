const express = require('express');
const router = express.Router();
const controller=require('../controller/controller.js')
const {body}=require('express-validator')
router.post('/verificationMail',

    body('name').isLength({ min: 2 }).notEmpty().withMessage('name Must be require'),
    body('email').isEmail().notEmpty().withMessage('email must be Required'),
    body('password').isLength({ min: 4 }).withMessage('password atleast 4 character').notEmpty().withMessage("password must be required")
    , controller.verificationMail)
router.get('/register',controller.register)
module.exports=router