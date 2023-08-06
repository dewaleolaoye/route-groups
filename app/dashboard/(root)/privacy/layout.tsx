import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const PrivacyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-8'>
      <div className='flex-shrink-0'>
        <div>
          <Link href='/dashboard/privacy'>Privacy Sidebar</Link>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default PrivacyLayout;
