var express = require('express');
var router = express.Router();
var nodeMailer = require( 'nodemailer' );

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'slckrpckr@gmail.com', //YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
        pass: '$lckrPckr'  //YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
    }
});

router.post('/', function(req, res, next) {
      var mailer = req.body;
      console.log('log mailer ', mailer);

      var mailOptions = {
          from: '"SlckrPckr" slckrpckr@gmail.com', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
          to: mailer.toEmail, // list of receivers
          subject: mailer.subject, // Subject line
          text: mailer.message, // plain text body
          html: '<b>' + mailer.message + '</b>' // html body
      };  

      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });

      res.send(200);
});

module.exports = router;
