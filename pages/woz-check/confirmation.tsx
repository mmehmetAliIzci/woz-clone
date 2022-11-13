/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Box } from '../core/Box/Box';
import { StyledH1 } from '../core/Typography/h1';
import { StyledP } from '../core/Typography/p';
import { StyledH2 } from '../core/Typography/h2';
import styled from '@emotion/styled';
import { BoxWithGrayBg } from '../core/BoxWithGrayBg/BoxWithGrayBg';
import { Button } from '../core/Button/Button';
import { GreenTick } from '../core/Icons/GreenTick';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/router';
import { HouseAddressBox } from '../components/HouseAddressBox/HouseAddressBox';
import { fetchWOZvalue } from '../core/api/fetchWOZvalue';
import { setWozValues } from '../stateMachine/setWozValues';
import { Modal } from '../core/Modal/Modal';
import useModal from '../core/Modal/useModal';
import { isResidentialAddress } from '../helpers/isResidentialAddress';
import { Flex } from '../core/Flex/Flex';
import {
  InfoCardContainer,
  InfoCardNumber,
  InfoCardWrapper
} from '../components/InfoCard/InfoCard';
import { resetAddress } from '../stateMachine/resetAddres';

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

  const router = useRouter();

  const handleBackButton = () => {
    actions.resetAddress();
    router.back();
  };

  const handleNextButton = async () => {
    if (selectedAddress) {
      if (!isResidentialAddress(selectedAddress)) {
        const wozValues = await fetchWOZvalue();
        actions.setWozValues({ wozValues });

        if (wozValues.wozValue > wozValues.eWozValue) {
          router.push('/woz-check/savings');
        } else {
          router.push('/woz-check/no-savings');
        }
      } else {
        toggleModal();
      }
    }
  };

  return (
    <Box>
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
