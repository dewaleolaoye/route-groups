import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>First Layout</div>

      <div>{children}</div>
    </div>
  );
};

export default layout;
