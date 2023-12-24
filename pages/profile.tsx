// pages/profile.tsx
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Profile Page</h1>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <Link href="/api/auth/logout">Sign out</Link>
        </>
      ) : (
        <p>You are not authenticated.</p>
      )}
    </div>
  );
}
