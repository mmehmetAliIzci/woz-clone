/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { Box } from '../components/shared/Box/Box';
import { StyledH1 } from '../components/shared/Typography/h1';
import { ToastBox } from '../components/shared/ToastBox/ToastBox';
import { StyledH2 } from '../components/shared/Typography/h2';
import styled from '@emotion/styled';
import { BoxWithGrayBg } from '../components/shared/BoxWithGrayBg/BoxWithGrayBg';
import { Button } from '../components/shared/Button/Button';
import { Flex } from '../components/shared/Flex/Flex';
import {
  HouseInformationRow,
  HouseInformationText
} from '../components/shared/HouseInformation/HouseInformation';
import { flexColumn } from '../components/shared/styles';

// TODO: read from global state to show savings or no savings
export default function Savings() {
  return (
    <Box>
      <StyledH1>U betaalt te veel belasting door een te hoge WOZ-waarde</StyledH1>

      <ToastBox warning>
        <StyledH2>U kunt geld besparen.</StyledH2>
      </ToastBox>

      <StyledH2>WOZ-waarde</StyledH2>
      <BoxWithGrayBg css={flexColumn}>
        <HouseInformationRow>
          <HouseInformationText>Huidige WOZ-waarde</HouseInformationText>
          <HouseInformationText>€ 280.000</HouseInformationText>
        </HouseInformationRow>
        <HouseInformationRow>
          <HouseInformationText>Eerlijke WOZ-waarde</HouseInformationText>
          <HouseInformationText>€ 243.000</HouseInformationText>
        </HouseInformationRow>
      </BoxWithGrayBg>

      <StyledH2>Verwachte besparingen per jaar</StyledH2>
      <BoxWithGrayBg css={[flexColumn, { marginBottom: '0px' }]}>
        <HouseInformationRow>
          <HouseInformationText>Inkomstenbelasting</HouseInformationText>
          <HouseInformationText>€ 82</HouseInformationText>
        </HouseInformationRow>
        <HouseInformationRow>
          <HouseInformationText>Onroerende-zaakbelasting (OZB)</HouseInformationText>
          <HouseInformationText>€ 26</HouseInformationText>
        </HouseInformationRow>
        <HouseInformationRow>
          <HouseInformationText>Watersysteemheffing</HouseInformationText>
          <HouseInformationText>€ 12</HouseInformationText>
        </HouseInformationRow>
      </BoxWithGrayBg>
      <ToastBox success>
        <HouseInformationText>
          <StyledH2>Totale besparing</StyledH2>
        </HouseInformationText>
        <HouseInformationText>
          <StyledH2>€ 26</StyledH2>
        </HouseInformationText>
      </ToastBox>

      <Flex css={{ gap: 16 }}>
        <Button secondary>Vorige</Button>
        <Button primary css={{ flexGrow: 100 }}>
          Maak gratis beswaar
        </Button>
      </Flex>
    </Box>
  );
}
