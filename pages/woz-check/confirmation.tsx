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
import { GreenTick } from '../core/icons/GreenTick';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/router';
import { HouseAddressBox } from '../components/HouseAddressBox/HouseAddressBox';
import { fetchWOZvalue } from '../core/api/fetchWOZvalue';
import { setWozValues } from '../stateMachine/setWozValues';

const InfoCardWrapper = styled.div`
  margin-top: 24px;
  & div:not(:first-child) {
    margin-top: 16px;
  }
`;
const InfoCardContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  min-height: 20px;
  line-height: 1.2;
`;
const InfoCardNumber = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100%;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
const FooterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Confirmation() {
  const { state, actions } = useStateMachine({ setWozValues });

  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  const handleNextButton = async () => {
    if (state.selectedAddress) {
      const wozValues = await fetchWOZvalue();
      actions.setWozValues({ wozValues });

      if (wozValues.wozValue > wozValues.eWozValue) {
        router.push('/woz-check/savings');
      } else {
        router.push('/woz-check/no-savings');
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
      <HouseAddressBox address={state.selectedAddress} />

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
