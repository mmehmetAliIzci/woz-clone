'use client';
/** @jsxImportSource @emotion/react */

import { Box } from '@components/Atoms/Box/Box';
import styled from '@emotion/styled';
import { useStateMachine } from 'little-state-machine';
import { setWozValues } from '../../../stateManagers/setWozValues';
import { resetAddress } from '../../../stateManagers/resetAddres';
import useModal from '@components/Atoms/Modal/useModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isResidentialAddress } from './isResidentialAddress';
import { StyledErrorP, StyledP } from '@components/Atoms/Typography/p';
import { StyledH1 } from '@components/Atoms/Typography/h1';
import {
  InfoCardContainer,
  InfoCardNumber,
  InfoCardWrapper
} from '@components/molecules/InfoCard/InfoCard';
import { BoxWithGrayBg } from '@components/Atoms/BoxWithGrayBg/BoxWithGrayBg';
import { GreenTick } from '@components/Atoms/Icons/GreenTick';
import { StyledH2 } from '@components/Atoms/Typography/h2';
import { HouseAddressBox } from '@components/molecules/HouseAddressBox/HouseAddressBox';
import { Modal } from '@components/Atoms/Modal/Modal';
import { Flex } from '@components/Atoms/Flex/Flex';
import { Button } from '@components/Atoms/Button/Button';

const FooterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Confirmation() {
  const {
    state: { selectedAddress },
    actions
  } = useStateMachine({ setWozValues, resetAddress });
  const { isOpen, toggleModal } = useModal();
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleBackButton = () => {
    actions.resetAddress();
    router.back();
  };

  const handleNextButton = async () => {
    if (selectedAddress) {
      if (isResidentialAddress(selectedAddress)) {
        try {
          const response = await fetch(`http://localhost:3000/api/woz-value`);

          if (!response.ok) {
            throw new Error('Api response returned not ok');
          }

          const wozValues = await response.json();

          actions.setWozValues({ wozValues });

          if (wozValues.wozValue > wozValues.eWozValue) {
            router.push('/woz-check/savings');
          } else {
            router.push('/woz-check/no-savings');
          }
        } catch (e: unknown) {
          console.error(e);
          setIsError(true);
        }
      } else {
        toggleModal();
      }
    }
  };

  return (
    <Box>
      {isError && <StyledErrorP>Something went wrong</StyledErrorP>}
      <StyledH1>Welkom bij de WOZ Check 2022!</StyledH1>
      <StyledP>Zie binnen 1 minuut of uw WOZ-waarde klopt en hoeveel u kunt besparen.</StyledP>

      <InfoCardWrapper>
        <InfoCardContainer>
          <InfoCardNumber>1</InfoCardNumber>
          <span>Controleer uw woninggegevens</span>
        </InfoCardContainer>
        <InfoCardContainer>
          <InfoCardNumber>2</InfoCardNumber> <span>Zie hoeveel u kunt besparen</span>
        </InfoCardContainer>
        <InfoCardContainer>
          <InfoCardNumber>3</InfoCardNumber> <span>Eerlijke WOZ regelt het bezwaar voor u.</span>
        </InfoCardContainer>
      </InfoCardWrapper>
      <BoxWithGrayBg>
        <GreenTick /> <span>Voldoet aan AVG privacywetgeving</span>
      </BoxWithGrayBg>

      <StyledH2>Uw adres</StyledH2>
      <HouseAddressBox address={selectedAddress} />

      <Modal
        isOpen={isOpen}
        toggle={toggleModal}
        header={<StyledH2>Adres heeft een zakelijke of gemengde bestemming</StyledH2>}
      >
        <StyledP>
          Volgens onze gegevens heeft dit adres een zakelijke bestemming, helaas controleert
          Eerlijke WOZ op dit moment alleen de WOZ-waarde van woningen.
        </StyledP>
        <StyledP>
          We zullen in de toekomst wel de WOZ-waarde van zakelijk vastgoed controleren. Indien u
          wenst dat EErlijke WOZ contact met u opneemt zodra de WOZ Check ook beschikbaar is voor
          zakelijk vastgoed, ga dan verder met inschrijven.
        </StyledP>
        <HouseAddressBox address={selectedAddress} />
        <Flex css={{ gap: 16 }}>
          <Button primary>Aanmelden voor Eerlijke WOZ zakelijk</Button>
          <Button secondary>Deze woning wordt niet zakelijk gebruikt</Button>
        </Flex>
      </Modal>

      <FooterButtonWrapper>
        <Button secondary onClick={handleBackButton}>
          Vorige
        </Button>
        <Button primary onClick={handleNextButton}>
          Volgende
        </Button>
      </FooterButtonWrapper>
    </Box>
  );
}
