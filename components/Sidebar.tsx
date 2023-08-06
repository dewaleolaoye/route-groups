import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='flex-shrink-0'>
      <Link href='/dashboard'>Home</Link>
      <br />
      <br />
      <Link href='/dashboard/content'>Content</Link>
      <br />
      <br />
      <Link href='/dashboard/marketing'>Marketing</Link>
      <br />
      <br />
      <Link href='/dashboard/privacy'>Privacy</Link>
      <br />
      <br />
      <Link href='/dashboard/settings'>Settings</Link>
    </div>
  );
};

export default Sidebar;
