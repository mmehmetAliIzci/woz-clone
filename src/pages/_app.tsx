import type { AppProps } from 'next/app';
import { css, ThemeProvider, Global } from '@emotion/react';
import MainLayout from '../molecules/Layouts/MainLayout';
import { createStore, StateMachineProvider } from 'little-state-machine';

export const lightTheme = {
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

createStore({
  selectedAddress: undefined,
  wozValues: undefined,
  step: 'SelectAddress'
});

// TODO: make body styleable with color and background color depending on theme
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateMachineProvider>
      <ThemeProvider theme={lightTheme}>
        <Global
          styles={css`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: sans-serif;
              background-color: rgb(236, 240, 249);
              color: rgb(52, 69, 99);
            }

            * {
              box-sizing: border-box;
            }
          `}
        />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </StateMachineProvider>
  );
}
