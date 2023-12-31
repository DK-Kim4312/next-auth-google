// lib/passport-config.ts
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Replace with your Google OAuth credentials
const GOOGLE_CLIENT_ID = '';
const GOOGLE_CLIENT_SECRET = '';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback', // Your authorized redirect URI
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
