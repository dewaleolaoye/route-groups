'use client';
import { useParams } from 'next/navigation';
const MarketingDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Marketing details - {id}</h1>
    </div>
  );
};

export default MarketingDetails;
