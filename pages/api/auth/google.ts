// pages/api/auth/google.ts
import passport from 'passport';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, () => {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.status(401).send('Authentication failed');
    }
  });
};
