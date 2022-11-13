/** @jsxImportSource @emotion/react */
import { Box } from '../core/Box/Box';
import { StyledH1 } from '../core/Typography/h1';
import { ToastBox } from '../core/ToastBox/ToastBox';
import { StyledH2 } from '../core/Typography/h2';
import { BoxWithGrayBg } from '../core/BoxWithGrayBg/BoxWithGrayBg';
import { Button } from '../core/Button/Button';
import { Flex } from '../core/Flex/Flex';
import {
  HouseInformationRow,
  HouseInformationText
} from '../components/HouseInformation/HouseInformation';
import { flexColumn } from '../core/styles';
import { useStateMachine } from 'little-state-machine';
import { HouseWozValueBox } from '../components/HouseWozValueBox/HouseWozValueBox';

export default function Savings() {
  const { state } = useStateMachine();

  return (
    <Box>
      <StyledH1>U betaalt te veel belasting door een te hoge WOZ-waarde</StyledH1>

      <ToastBox warning>
        <StyledH2>U kunt geld besparen.</StyledH2>
      </ToastBox>

      <StyledH2>WOZ-waarde</StyledH2>
      <HouseWozValueBox wozValues={state.wozValues} />

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
