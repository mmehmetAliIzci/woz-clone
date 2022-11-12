/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Box } from '../components/shared/Box/Box';
import { StyledH1 } from '../components/shared/Typography/h1';
import { StyledP } from '../components/shared/Typography/p';
import { StyledH2 } from '../components/shared/Typography/h2';
import styled from '@emotion/styled';
import { BoxWithGrayBg } from '../components/shared/BoxWithGrayBg/BoxWithGrayBg';
import { Button } from '../components/shared/Button/Button';
import { GreenTick } from '../components/shared/icons/GreenTick';

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
      <BoxWithGrayBg>
        <span>Mathenesserdijk, 328-A 3026GS, Rotterdam</span>
      </BoxWithGrayBg>
      <FooterButtonWrapper>
        <Button secondary>Vorige</Button>
        <Button primary>Volgende</Button>
      </FooterButtonWrapper>
    </Box>
  );
}
