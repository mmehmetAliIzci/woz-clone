'use client';
import { css, Global, ThemeProvider } from '@emotion/react';
import { createStore, StateMachineProvider } from 'little-state-machine';
import React from 'react';
import MainLayout from '@components/molecules/Layouts/MainLayout';
import { lightTheme } from '@components/utilityStyles';
import { Steps } from '../stateManagers/types';

createStore(
  {
    selectedAddress: undefined,
    wozValues: undefined,
    step: Steps.SelectAddress
  },
  {
    persist: 'none'
  }
);

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </StateMachineProvider>
      </body>
    </html>
  );
}
