import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-8 p-4'>
      <div className='flex-shrink-0'>
        <Link href='/dashboard/content'>Content</Link>
        <br />
        <br />
        <br />
        <Link href='/dashboard/marketing'>Marketing</Link> <br />
        <br />
        <br />
        <Link href='/dashboard'>Home</Link>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default layout;
