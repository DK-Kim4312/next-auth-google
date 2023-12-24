import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/api/auth/google">Login with Google</Link>
    </div>
  );
}