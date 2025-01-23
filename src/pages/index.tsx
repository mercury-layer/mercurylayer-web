import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import MainTable from "@/components/mainTable/MainTable";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Button } from "flowbite-react";
import Hero from "@/components/hero/Hero";
import MercuryDocs from "@/components/docs/MercuryDocs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>mercurylayer.org</title>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM Mono"/>
      </Head>
      <header>
        <Header />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center justify-start md:px-4 md:py-12 py-3 ${inter.className}`}
      >
        <MainTable />
        <Hero/>
      </main>
      <Footer />
    </>
  );
}
