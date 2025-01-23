import MercuryMDX from '@/markdown/index.mdx';
import { useEffect, useState } from 'react';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Client-side logic here
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a loading state or return nothing during SSR
    return null;
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Sidebar */}
      {/* Main Content */}
    </div>
  );
}
