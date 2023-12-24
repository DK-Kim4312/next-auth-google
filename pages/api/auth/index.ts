// pages/api/auth/index.ts
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    res.json({ user: session.user });
  } else {
    res.json({ user: null });
  }
};
