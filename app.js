const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local")
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.raw({type: "application/json"}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://admin-harsha:"+process.env.DB_PASSWORD+"@cluster0.svuwl.mongodb.net/blogDB?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

const postSchema = {
  title: String,
  body: String,
  description: String,
  createdAt: Date
};

const Post = mongoose.model("Post", postSchema);


const userSchema = new mongoose.Schema ({
  email: String,
  password: String,
  googleId: String,
  secret: String
});

userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
  // function of username, password, done(callback)
  function(email, password, done) {
    console.log("getting to local strategy")
    // look for the user data
    User.findOne({ email: email }, function (err, user) {
      // if there is an error
      if (err) {
        return done(err);

      }
      // if user doesn't exist
      if (!user) { return done(null, false, { message: 'User not found.' }); }

      bcrypt.compare(password, hash, function(err, resp){
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false, {message: 'Invalid password.' });
          }
      })
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get("/api/blog", function(req, res){
  Post.find({}, function(err, posts){
    if (err) {
      console.log(err)
    } else {
      res.json({message: posts});
    }
  });
});

app.get("/genhash", function(req, res){
  bcrypt.hash(req.body.password, 10, function(err, hash){
    console.log("req body password: ", req.body.password)
    console.log("hash: ", hash)
  })
});

app.get("/api/blog/:slug", function(req, res){
  const requestedPostId = req.params.slug;
  Post.findOne({_id: requestedPostId}, function(err, post){
    if (!err) {
      res.json({post: post});
    } else {
      res.sendStatus(500)
    }
  });
});

app.post("/api/login", function(req, res){
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/compose");
      });
    }
  });

});

app.post("/api/compose", function(req, res){
  if (!req.isAuthenticated()){
    res.send(400).end()
    return
  }

  body = JSON.parse(req.body)

  const post = new Post({
    title: body.title,
    description: body.description,
    body: body.content,
    createdAt: new Date()
  });

  post.save(function(err){
    if (err){
        res.status(500).send({"message": err});
    }
    res.status(200).send({"message": "ok"})
  });

})

app.get("/api/auth", function(req, res){
  if (req.isAuthenticated()) {
    res.json({"isauthed": true})
  } else {
    res.json({"isauthed": false})
  }
});


app.get('*', (req, res)=>{
  return res.sendFile(path.join(__dirname,"client/build", "index.html"))
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
