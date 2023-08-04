'use client';
import { useParams } from 'next/navigation';
const ContentDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Content details - {id}</h1>
    </div>
  );
};
export default ContentDetails;
