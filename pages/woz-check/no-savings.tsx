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
import { StyledP } from '../components/shared/Typography/p';
import {
  HouseInformationRow,
  HouseInformationText
} from '../components/shared/HouseInformation/HouseInformation';
import { flexColumn } from '../components/shared/styles';

// TODO: read from global state to show savings or no savings
export default function NoSavings() {
  return (
    <Box>
      <StyledH1>Uw WOZ-waarde is waarschijnlijk niet te hoog</StyledH1>

      <ToastBox information>
        <StyledH2>U kunt waarschijnlijk geen geld besparen.</StyledH2>
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

      <StyledP>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </StyledP>
      <StyledP>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </StyledP>

      <Flex css={{ gap: 16 }}>
        <Button secondary>Vorige</Button>
        <Button primary css={{ flexGrow: 100 }}>
          Aanmelden voor WOZ Notificatie
        </Button>
      </Flex>
    </Box>
  );
}
