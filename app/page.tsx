import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-24'>
      <h1>Home</h1>

      <Link href='/dashboard'>Dashboard</Link>
    </main>
  );
}
