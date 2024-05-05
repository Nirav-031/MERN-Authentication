const nodemailer = require("nodemailer");
const User=require('../model/model.js')
const { validationResult } = require('express-validator')
const bcrypt=require('bcrypt');
const Tocken = require("../jwt.js");
const globleData = {
    name: "",
    email: "",
    password:""
}

exports.verificationMail =async (req,res) => {
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

        console.log(error);
        res.status(400).json(error)
    } else
    {
         const data = await User.findOne({ email: req.body.email });
        if (data) {
            res.status(400).json({ msg: "Email Already present" })
        }
        else {
            sendmail(transporter, mailoptions)
            res.status(200).json({ msg: "Verification link sent to your respected Email" })
        }
    }
   
        
    globleData.name = req.body.name;
    globleData.email = req.body.email;
    globleData.password = req.body.password;
    
}

exports.register = async (req, res) => {
    console.log(globleData.email);
   
    const hashPassword = await bcrypt.hash(globleData.password, 12);
        const result = await User.insertMany({
            email: globleData.email,
            name: globleData.name,
            password:hashPassword,
            emailVerification: true
        });
        result ? res.redirect('http://localhost:5173/verification') : res.status(400).json({ msg: 'something went wrong' })
    

}

exports.login = async (req, res) => {
    const data = await User.findOne({ email: req.body.email });
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json(error)
        
    }
    else {
        if (data) {
            const pass = await bcrypt.compare(req.body.password, data.password)
            if (pass) {
                const tocken = Tocken.createTocken({ id: data._id, email: data.email })
                res.status(200).json({tocken});
                // res.cookie('jwt',tocken,{httpOnly:true})
            }
            else
            {
                res.status(400).json({ msg: "Password Not Match" });
            }
        }
        else {
            res.status(400).json({ msg: "please register first" })
        }
    }
}

exports.middleware = (req, res,next) => {
    const tocken = req.body.tocken;
    console.log(tocken);

    const data = Tocken.verifyTocken(tocken)
    console.log(data);
    req.email = data.email
    req.client_id=req.id
    next()
}

exports.home = (req, res) => {
    res.status(200).json({id:req.client_id,email:req.email})
}