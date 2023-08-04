import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div>
        <h1>Content</h1>
        <Link href='/dashboard/content/22231'>Click Content Details</Link>

        <br />
        <Link href='/dashboard/marketing'>Marketting page</Link>
      </div>
    </div>
  );
};

export default page;
