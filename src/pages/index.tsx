/** @jsxImportSource @emotion/react */
import { StyledH1 } from '../core/components/Typography/h1';
import { StyledP } from '../core/components/Typography/p';
import { Box } from '../core/components/Box/Box';
import { AddressSearch, SelectItem } from '../molecules/AddressSearch/AddressSearch';
import { SingleValue } from 'react-select';
import { useStateMachine } from 'little-state-machine';
import { selectAddress } from '../stateManagers/selectAddress';
import { useRouter } from 'next/router';
import { StyledH2 } from '../core/components/Typography/h2';

export default function Home() {
  const router = useRouter();
  const { actions, state } = useStateMachine({ selectAddress });

  const handleButtonClick = () => {
    if (state.selectedAddress) {
      router.push('/woz-check/confirmation');
    }
  };

  const handleOnChange = (newValue: SingleValue<SelectItem>) => {
    if (newValue) {
      actions.selectAddress({ selectedAddress: newValue.value });
      router.push('/woz-check/confirmation');
    }
  };

  return (
    <div>
      <main>
        <Box>
          <StyledH1>Welkom bij de WOZ Check 2022</StyledH1>
          <StyledP>Voer uw woonadres in om te beginnen.</StyledP>
          <StyledH2 css={{ marginBottom: '8px' }}>Woonadres</StyledH2>
          <AddressSearch onChange={handleOnChange} onButtonClick={handleButtonClick} />
        </Box>
      </main>
    </div>
  );
}
