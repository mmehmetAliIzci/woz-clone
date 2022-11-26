import type { AppProps } from 'next/app';
import MainLayout from '../molecules/Layouts/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
