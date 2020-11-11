require('dotenv').config()
const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOptions = {
    from: '',// source
    to: '',//destination
    subject: '',
    text: ''
}


transporter.sendMail(mailOptions, function (err, data) {
    if (!err) {
        console.log('email sended',err)
    } else {
        console.log('err')
    }
})
