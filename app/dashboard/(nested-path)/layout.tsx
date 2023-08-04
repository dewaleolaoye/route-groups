import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-4'>
      <div>Details Layout</div>

      <div>{children}</div>
    </div>
  );
};

export default layout;
