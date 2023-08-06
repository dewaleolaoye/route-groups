import Sidebar from '@/components/Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-8 p-4'>
      <Sidebar />

      <div>{children}</div>
    </div>
  );
};

export default layout;
