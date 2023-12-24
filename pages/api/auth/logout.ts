// pages/api/auth/logout.ts
import { signOut } from 'next-auth/react';

export default async (req, res) => {
  await signOut();
  res.redirect('/');
};
