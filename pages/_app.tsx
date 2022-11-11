import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import MainLayout from './components/Layouts/MainLayout';

const lightTheme = {
  colors: {
    primary: '#297AFF',
    primaryHover: '#0061FF',
    backgroundColor: '#ECF0F9',
    primaryText: '#344563',
    light: '#FFFFFF'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
