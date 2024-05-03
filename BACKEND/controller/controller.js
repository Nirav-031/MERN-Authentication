const nodemailer = require("nodemailer");
const User=require('../model/model.js')
const {validationResult}=require('express-validator')
const globleData = {
    name: "",
    email: "",
    password:""
}

exports.verificationMail = (req,res) => {
    const email = req.body.email;
    // console.log(req.body.email);
    const error = validationResult(req);


     const transporter = nodemailer.createTransport({
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
    });
    
    const mailoptions={
            from: {
                name: "E - STORE",
                address:process.env.USER
            }, // sender address
        to:email, // list of receivers
        subject: "Verification Mail ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: "<b>please Verify Your Email using This Link : <a href='http://127.0.0.1:3000/register'>Verify</a></b>", // html body
    }

    
    // send mail with defined transport object
        const sendmail = async (transporter,mailoptions) => {
            try {
                await transporter.sendMail(mailoptions)
                console.log('mail sent');
            } catch (error) {
            console.log(error);
            }
    }
    
    if (!error.isEmpty())
    {

        console.log(errors);
        res.status(400).json(errors)
    } else
    {
        sendmail(transporter,mailoptions)
        res.status(200).json({msg:"Verificationlink sent to your respected Email"})
    }
   
        
    globleData.name = req.body.name;
    globleData.email = req.body.email;
    globleData.password = req.body.password;
    
}

exports.register = async (req, res) => {
    console.log(globleData.email);
    const data = await User.findOne({ email: globleData.email });
    if (data) {
        res.status(400).json({ msg: "Email Already present" })
    } else {
        const result = await User.insertMany({
            email: globleData.email,
            name: globleData.name,
            password: globleData.password,
            emailVerification: true
        });
        result ? res.status(200).json(result) : res.status(400).json({ msg: 'something went wrong' })
    }


    
}