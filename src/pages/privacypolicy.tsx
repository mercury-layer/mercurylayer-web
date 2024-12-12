import PrivacyMDX from '../markdown/privacy.mdx'
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

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
    <div className="privacy-policy">
      <Head>
        <title>mercurylayer.com</title>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM Mono"/>
      </Head>
      <header>
        <Header />
      </header>
      <main className={`flex min-h-screen flex-col items-center justify-start md:px-4 md:py-12 py-3`}>
          <PrivacyMDX />
      </main>
      <Footer />
    </div>
  )
}
