import Image from 'next/image';
import Head from "next/head";
import Link from "next/link";

import './style.css';

export default function Home() {
  return (
      <main className="home_container">
          <div className="home_wrapper">
              <Head>
                  <meta name="description" content="Support our cause"/>
              </Head>
              <header className="home_header">
                  <h1>Welcome to Jan Kalyan Sewa</h1>
              </header>
              <main>
                  <p className="home_description">Details about the charity’s mission and goals.</p>
              </main>
              <button className="home-btn">
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
