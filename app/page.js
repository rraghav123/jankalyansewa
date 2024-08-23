import Image from 'next/image';
import Head from "next/head";
import Link from "next/link";

import './style.css';

export default function Home() {
  return (
      <main className="relative flex-1">
          <div className="home_wrapper">
              <Head>
                  <meta name="description" content="Support our cause"/>
              </Head>
              <header className="text-6xl">
                  <h1>Welcome to Jan Kalyan Sewa</h1>
              </header>
              <main>
                  <p className="text-lg mt-5">Details about the charity’s mission and goals.</p>
              </main>
              <button className="w-32 h-12 rounded-3xl bg-green-800 mt-5">
                  <Link href="/about">Find out more</Link>
              </button>
          </div>
          <Image
              src="/poster.webp"
              layout="responsive"
              width={500}
              height={500}
              alt="poster" className="home_poster"
              fill={false}
              style={{ objectFit: "contain" }}

          />
      </main>
  );
}
