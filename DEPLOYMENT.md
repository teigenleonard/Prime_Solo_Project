Today! Moving code to external server.
Two methods: Heroku to host server; mLab to host database.
  -->Why? Business models are different.
        DB takes lots of space; so size is paramount.
        Server takes lots of calls, so performance is paramount.
mLab is specific to MongoDB; others exist for e.g. PostgreSQL.
A "static resource" is a file that's automatically requested along the "static" (as opposed to get/put/post/delete?) routes.
You can make 'static' (as opposed to 'get', 'post', etc) calls.
You need to have made at least one commit for heroku to pick up your files.
--> MAKE & PUSH NEW HEROKU SITE
$ heroku create
$ git push heroku master
  (for updates, only use "$git push heroku master")
--> OPEN IN BROWSER
$ heroku open
--> GET LOGS
$ heroku logs
Push to heroku at end of workday -- if your page is running locally but breaks @ heroku, it limits the number of error locations.
"beforeSend: " is a property in AJAX that allows for actions *while* the request is being made
Asynch from client to server, from server to database, then instantaneous in the other direction.
"Promise" in code is essentially an operation based on the assumption that there will be code returned.
RESTful - protocol for communication between client and server (Get, Post, Put, Delete)
CRUD - convention for communication between server and DB
--> ADD POSTGRESQL
Details here: https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-the-add-on
$ heroku addons:create heroku-postgresql:[plan/tier name, e.g. "hobby-dev"]
  --> creates new postgres db attached to site
$ heroku config
  --> returns DATABASE_URL; this string is organized:
  postgres://user : password @ host : port / database
(use the above string to make config vars in your dashboard "settings")
$ heroku pg:push [mylocaldb_name] [HEROKU DB NAME]
  --> pushes local db's data to postgres db
To access the remote DB on Postico, "show new favorites window (ctrl+n)", then "add new favorite",
then copy the config vars that they request.
