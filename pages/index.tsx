import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Places from "@/components/Places";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fragoulis Giannis - Taxi Services</title>
        <meta name="description" content="Safe, affordable rides to every destination." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fragoulis.jpg" />
      </Head>

      <Header />

      <main className="flex flex-col grow px-8 md:px-0">
        <Hero />
        <Places />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
