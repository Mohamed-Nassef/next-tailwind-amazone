import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title ? title + "- Amazona" : "Amazona"}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 justify-between items-center px-4 shadow-md'>
            <Link href='/' className='text-lg font-bold'>
              amazona
            </Link>
            <div>
              <Link href='/cart' className='p-2'>
                cart
              </Link>
              <Link href='/login' className='p-2'>
                login
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4 '>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
          <p>Copyright 2022 Amazona</p>
        </footer>
      </div>
    </div>
  );
}
