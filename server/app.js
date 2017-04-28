var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var passport = require('./strategies/user_sql.js');
var session = require('express-session');
var nodeMailer = require( 'nodemailer' );

// Route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'slckrpckr@gmail.com', //YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
        pass: '$lckrPckr'  //YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post('/mail', function(req,res){
    var mailer = req.body;
    console.log('log mailer ', mailer);

    var mailOptions = {
//example: from: '"Scott" scott@primeacademy.io',
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
app.use('/register', register);
app.use('/user', user);
app.use('/*', index);




// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
