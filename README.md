# SQL Strategy Branch
Branched from `angular-ctrl-with-routes`. The main difference is it now uses `/strategies/user_sql.js`. See `/modules/connection.js` to set your PostGRES DB connection string. You will find a basic `CREATE TABLE` query commented out in the strategy file.

You'll need the `pg` module as well (just run `npm install`)

`/models/user.js` is no longer needed at all.

## Branch Breakdown
* `master:` Original lecture code with jQuery, alt static file serving, Grunt, Mongoose/Mongo
* `angular-complete:` Angular and MongoDB version as shown to Iota cohort.
* `sql_strategy:` Replaces MongoDB with PostGRES for storage of user data. Maintains bcrypt functionality.
* `angular-controlled-login-intro` : Introduces Angular as the login handler. All server communication is handled in an Angular Controller and updates the route/page based on success or failure. Intended for an alternate intro lecture to Passport (as seen in angular-complete and sql_strategy).

# Express/Passport Lecture Starting File
Download and run 'npm install' before the lecture as prep. In this lecture, we will build out a user registration page and allow our users to log into our application. Once they are logged in, we will see information returned to us, specific to the user.


change search for users select * from 'users' to whatever i change table name to
created table from notes on postico queries
used "find in project" to find all instances of item needed to change
changed passport_users database in connection.js (only need to update this DB name)

1. Download zip
2. Update connection.js (modules folder)
2. change username
3. Create a database with matching name
4. Run this query in your new database
```CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null,
  "password" varchar(120) not null
);
```
5. npm install
6. npm start

generate an SQL file with the create table SQL commands
          or
have it hosted on heroku so they don't have to download file to set it up
