// pages/api/auth/google-callback.ts
import passport from 'passport';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  passport.authenticate('google', { failureRedirect: '/' })(req, res, () => {
    // Successful authentication, redirect to the desired page.
    res.redirect('/profile');
  });
};
