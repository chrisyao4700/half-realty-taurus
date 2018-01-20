const nodemailer = require('nodemailer');

function sendEmail(pack, callback) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'halfrealty666@gmail.com', // generated ethereal user
            pass: 'Colima@18931'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: 'halfrealty666@gmail.com', // sender address
        to: ['halfrealty888@gmail.com', pack.email], // list of receivers
        subject: 'NEW REGISTRATION', // Subject line
        text: 'INCOMING EMAIL:' + pack.email + " FROM HALF REALTY"// plain text body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback({
                status: false,
                message: "EMAIL CALENDAR SEND FAIL"
            });
            console.log(error);
        } else {
            //console.log('Email sent: ' + info.response);
            callback({
                status: true,
                message: "EMAIL CALENDAR SENT"
            });
        }
    });

}

module.exports.sendEmail = sendEmail;