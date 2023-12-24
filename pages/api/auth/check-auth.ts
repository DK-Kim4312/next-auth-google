// pages/api/auth/check-auth.ts
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    res.status(200).end();
  } else {
    res.status(401).end();
  }
};
