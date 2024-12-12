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
      <aside className="sticky-sidebar">
        <div className="toc">
            <div className="toc-sticky">
                <div className="toc-item">
                    <a className="subtext" href="#mercurylayer">Mercury Layer</a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#overview"><small>- Overview</small></a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#mercury-layer-service"><small>- Mercury layer service</small></a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#statechain-transfers"><small>- Statechain transfers</small></a>
                </div>
                <div className="toc-item">
                    <a className="subtext" href="#mercurylayer-protocol">Mercury Layer Protocol</a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#preliminaries"><small>- Preliminaries</small></a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#initiation"><small>- Initiation</small></a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#key-reassignment"><small>- Key Reassignment</small></a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#orderly-closure"><small>- Orderly Closure</small></a>
                </div>
                <div className="toc-item-child">
                    <a className="subtext" href="#backup-closure"><small>- Backup closure</small></a>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="not-tailwind mdx-content">
        <section id="overview">
          <MercuryMDX />
        </section>
      </main>
    </div>
  );
}
