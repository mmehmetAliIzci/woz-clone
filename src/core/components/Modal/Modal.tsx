import React, { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: block;
  background: white;
  width: 70%;
  padding: 24px;
  border-radius: 16px;
`;

export const Header = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Divider = styled.div`
  display: block;
  background: lightgray;
  width: 100%;
  height: 2px;
`;

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  toggle: () => void;
  header: ReactNode;
}>;

export const Modal = ({ isOpen, toggle, header, children }: ModalProps) => (
  <>
    {isOpen && (
      <Overlay onClick={toggle}>
        <ModalBox onClick={(e) => e.stopPropagation()}>
          <Header>{header}</Header>
          <Divider />
          {children}
        </ModalBox>
      </Overlay>
    )}
  </>
);
