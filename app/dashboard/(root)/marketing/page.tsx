import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div>
        <h1>Marketting</h1>
        <Link href='/dashboard/marketing/2easd'>Marketing details</Link> <br />
        <Link href='/dashboard/content'>Content page</Link>
      </div>
    </div>
  );
};

export default page;
