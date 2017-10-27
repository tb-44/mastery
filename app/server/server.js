require('dotenv').config();

const bodyParser = require('body-parser'),
cors = require('cors'),
massive = require('massive'),
express = require('express'),
passport = require('passport'),
Auth0Strategy = require('passport-auth0'),
session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
      }));

//MIDDLEWARE USING PASSPORT
app.use( passport.initialize() );
app.use( passport.session() );


//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then(db => {
        app.set('db', db)
})

//AUTHENTICATION -- AUTH0
passport.use(new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK
      }, function(accessToken, refreshToken, extraParams, profile, done){
       
        const db = app.get('db');
        db.find_user(profile.id).then( user => {
          if(user[0]) {
            return done(null, user[0]);
          } else {
            db.create_user([profile.displayName, profile.emails[0].value,
            profile.picture, profile.id]).then(user => {
              return done(null, user[0]);
            })
          }
        })
      }));
      
      //SERIALIZE-USER INVOKED ONE TIME TO SET THINGS UP
      passport.serializeUser(function(user, done) {
          done(null, user);
      });
      
      //USER COMES FROM SESSION - INVOKED FOR EVERY ENDPOINT
      passport.deserializeUser(function(user, done){
          done(null, user)
        })
      
      //ENDPOINT -- PASSPORT AUTHENTICATE
      app.get('/auth', passport.authenticate('auth0'));
      
      //ENDPOINT AUTH CALLBACK DIRECT TO USER DASHBOARD
      app.get('/auth/callback', passport.authenticate('auth0', {
        successRedirect: 'http://localhost:3000/#/dashboard',
        failureRedirect: 'http://localhost:3000/#'
      }));
      
      //ENDPOINT AUTH0 - CHECKING FOR USER
      app.get('/auth/me', (req, res) => {
        if(!req.user) {
          return res.status(404).send('User not found')
        } else {
          return res.status(200).send(req.user);
        }
      });
      
      //AUTH ENDPOINT (Logout)
      app.get('/auth/logout', (req, res) => {
        req.logout() 
        return res.redirect(302, 'http://localhost:3000/'); 
      })


//ENDPOINTS


const port = 3005
app.listen(port, console.log(`Listening on ${port}`))