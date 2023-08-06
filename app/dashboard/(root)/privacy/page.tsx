import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div>
        <h1>Privacy</h1>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas quisquam? Repellat perspiciatis eaque
        doloremque eius iusto culpa iste rerum id, repellendus quod voluptates, dolor deleniti voluptas expedita earum
        a.
      </div>

      <div>
        <Link href='/dashboard/privacy/policy'>Go to Privacy Policy</Link>
      </div>
    </div>
  );
};

export default page;
