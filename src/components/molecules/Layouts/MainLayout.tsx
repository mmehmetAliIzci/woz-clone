'use client';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Sidebar from '../Sidebar/Sidebar';

const StyledMain = styled.main`
  display: flex;
  margin: 40px auto 0;
  flex: 1 0 960px;
  max-width: 960px;
`;

const SidebarWithNoSSR = dynamic(() => import('../Sidebar/Sidebar'), { ssr: false });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Woz Check'
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <StyledMain>
        <Sidebar />
        {children}
      </StyledMain>
    </>
  );
}
