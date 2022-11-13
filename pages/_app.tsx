import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import MainLayout from './components/Layouts/MainLayout';

const lightTheme = {
  colors: {
    primary: '#297AFF',
    secondary: '#FFFFFF',
    primaryHover: '#0061FF',
    backgroundColor: '#ECF0F9',
    primaryText: '#344563',
    light: '#FFFFFF',
    gray: 'rgb(244, 245, 247)'
  }
};

// TODO: make body styleable with color and background color depending on theme
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
