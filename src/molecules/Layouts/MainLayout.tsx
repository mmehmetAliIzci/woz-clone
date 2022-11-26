import { ReactNode } from 'react';
import Head from 'next/head';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
