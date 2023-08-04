import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>Dashboard Home</h1>
      <Link href='/dashboard/content'>Content</Link> <br />
      <Link href='/dashboard/marketing'>Marketing</Link> <br />
    </div>
  );
};

export default page;
