/** @jsxImportSource @emotion/react */
import { Box } from '../../core/components/Box/Box';
import { StyledH1 } from '../../core/components/Typography/h1';
import { ToastBox } from '../../core/components/ToastBox/ToastBox';
import { StyledH2 } from '../../core/components/Typography/h2';
import { Button } from '../../core/components/Button/Button';
import { Flex } from '../../core/components/Flex/Flex';
import { StyledP } from '../../core/components/Typography/p';
import { HouseWozValueBox } from '../../molecules/HouseWozValueBox/HouseWozValueBox';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/router';
import { setStep } from '../../stateManagers/setStep';

export default function NoSavings() {
  const { state, actions } = useStateMachine({ setStep });
  const router = useRouter();

  const handleBackButton = () => {
    actions.setStep({ step: 'ConfirmAddress' });
    router.back();
  };

  return (
    <Box>
      <StyledH1>Uw WOZ-waarde is waarschijnlijk niet te hoog</StyledH1>

      <ToastBox information>
        <StyledH2>U kunt waarschijnlijk geen geld besparen.</StyledH2>
      </ToastBox>

      <StyledH2>WOZ-waarde</StyledH2>
      <HouseWozValueBox wozValues={state.wozValues} />

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
        <Button secondary onClick={handleBackButton}>
          Vorige
        </Button>
        <Button primary css={{ flexGrow: 100 }}>
          Aanmelden voor WOZ Notificatie
        </Button>
      </Flex>
    </Box>
  );
}
