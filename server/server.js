// server.js
express = require('express');
passport = require('passport');
GoogleStrategy = require('passport-google-oauth20').Strategy;
session = require('express-session');


const app = express();

// Configure session middleware
app.use(
  session({
    secret: 'your-secret-key', // Replace with your secret key
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport and configure session
app.use(passport.initialize());
app.use(passport.session());

// Replace with your Google OAuth credentials
const GOOGLE_CLIENT_ID = '';
const GOOGLE_CLIENT_SECRET = '';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', // Your authorized redirect URI
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you can save user information to your database or perform other actions.
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  // You can customize how the user object is stored in the session.
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // You can customize how the user object is retrieved from the session.
  done(null, user);
});

// Define routes for authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to the desired page.
    res.redirect('/profile');
  }
);

// Protect a route that requires authentication
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

app.get('/', (req, res) => {
  res.send('Home Page<br><a href="/auth/google">Login with Google</a>');
});

app.get('/profile', ensureAuthenticated, (req, res) => {
  res.send(`Welcome, ${req.user.displayName}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
