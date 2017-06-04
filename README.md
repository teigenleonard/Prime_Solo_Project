
##Pack Mule:
This is a full stack web application that will allow multiple users to dynamically create and edit a group packing list. It will allow users to conveniently enter and organize each of the items on the list that can be shared so that organizing what to pack in a group situation is a breeze.

###Getting Started:
Download and run 'npm install' in order to get started. The program is will run locally on localhost/5000.

For database setup download and install Postico. Once installed find all CREATE queries in scripts/data/tables.sql, copy and execute to setup database tables.

###For GMAIL users:
This application uses Nodemailer to send invitations. Gmail requires that users will need to allow "less secure apps" to be checked in settings in order to allow Gmail to work properly. Find where to do this here: https://myaccount.google.com/lesssecureapps

Gmail also always sets authenticated username as the From: email address. So if you authenticate as foo@example.com and set bar@example.com as the from: address, then Gmail reverts this and replaces the sender with the authenticated user.


###Built With:###
Javascript
Node
Node Mailer
Express
Grunt
Bootstrap
Angular
Angular Routes
PostgresSQL
Postico
Heroku


###Versioning:
1.0.0

###Author:
Teigen Leonard


###Acknowledgments:
Scott Bromander and Chris Black

###Inspiration:
Packing with a group can be like trying to move a stubborn mule! Use this carrot to get the process moving quickly.
