'use client';
/** @jsxImportSource @emotion/react */
import { Box } from '@components/Atoms/Box/Box';
import { StyledH1 } from '@components/Atoms/Typography/h1';
import { ToastBox } from '@components/Atoms/ToastBox/ToastBox';
import { StyledH2 } from '@components/Atoms/Typography/h2';
import { BoxWithGrayBg } from '@components/Atoms/BoxWithGrayBg/BoxWithGrayBg';
import { Button } from '@components/Atoms/Button/Button';
import { Flex } from '@components/Atoms/Flex/Flex';
import {
  HouseInformationRow,
  HouseInformationText
} from '@components/Molecules/HouseInformation/HouseInformation';
import { useStateMachine } from 'little-state-machine';
import { HouseWozValueBox } from '@components/Molecules/HouseWozValueBox/HouseWozValueBox';
import { setStep } from '../../../stateManagers/setStep';
import { useRouter } from 'next/navigation';

import { Steps } from '../../../stateManagers/types';

export default function Savings() {
  const { state, actions } = useStateMachine({ setStep });
  const router = useRouter();

  const handleBackButton = () => {
    actions.setStep({ step: Steps.ConfirmAddress });
    router.back();
  };

  return (
    <Box>
      <StyledH1>U betaalt te veel belasting door een te hoge WOZ-waarde</StyledH1>

      <ToastBox warning>
        <StyledH2>U kunt geld besparen.</StyledH2>
      </ToastBox>

      <StyledH2>WOZ-waarde</StyledH2>
      <HouseWozValueBox wozValues={state.wozValues} />

      <StyledH2>Verwachte besparingen per jaar</StyledH2>
      <BoxWithGrayBg style={{ marginBottom: '0px', gap: 12 }}>
        <HouseInformationRow>
          <HouseInformationText>Inkomstenbelasting</HouseInformationText>
          <HouseInformationText>€82</HouseInformationText>
        </HouseInformationRow>
        <HouseInformationRow>
          <HouseInformationText>Onroerende-zaakbelasting (OZB)</HouseInformationText>
          <HouseInformationText>€26</HouseInformationText>
        </HouseInformationRow>
        <HouseInformationRow>
          <HouseInformationText>Watersysteemheffing</HouseInformationText>
          <HouseInformationText>€12</HouseInformationText>
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

      <Flex style={{ gap: 16 }}>
        <Button secondary onClick={handleBackButton}>
          Vorige
        </Button>
        <Button primary style={{ flexGrow: 100 }}>
          Maak gratis beswaar
        </Button>
      </Flex>
    </Box>
  );
}
