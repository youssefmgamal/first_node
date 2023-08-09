let mailer = require('nodemailer');

let transporter = mailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'input sender mail',
        pass: 'superdude1'
    }
});

let mailOptions = {
    from: 'input sender again',
    to: 'write recieving mail',
    subject:'sending from node.js',
    text: 'hello mail'
};

transporter.sendMail(mailOptions,(err,info) => {
    if(err){
        return console.log(err);
    } else{
        console.log('mail sent: ' + info.response)
    }
})