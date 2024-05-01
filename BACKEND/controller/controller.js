const nodemailer = require("nodemailer");
const globleData = {
    name: "",
    email: "",
    password:""
}

exports.verificationMail = (req,res) => {
    const email = req.body.email;
    // console.log(req.body.email);
    const transporter = nodemailer.createTransport({
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
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
    
   globleData.name = req.body.name;
   globleData.email = req.body.email;
    globleData.password = req.body.password;
    sendmail(transporter,mailoptions)
    
}

exports.register = async (req, res) => {
    console.log(globleData.email);
    res.send('register')
}