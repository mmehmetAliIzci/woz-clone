'use client';
/** @jsxImportSource @emotion/react */
import { StyledH1 } from '@components/Atoms/Typography/h1';
import { StyledP } from '@components/Atoms/Typography/p';
import { Box } from '@components/Atoms/Box/Box';
import { AddressSearch, SelectItem } from '@components/Molecules/AddressSearch/AddressSearch';
import { SingleValue } from 'react-select';
import { useStateMachine } from 'little-state-machine';
import { selectAddress } from '../stateManagers/selectAddress';
import { useRouter } from 'next/navigation';
import { StyledH2 } from '@components/Atoms/Typography/h2';

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
    }
  };

  return (
    <div>
      <main>
        <Box>
          <StyledH1>Welkom bij de WOZ Check 2022</StyledH1>
          <StyledP>Voer uw woonadres in om te beginnen.</StyledP>
          <StyledH2 style={{ marginBottom: '8px' }}>Woonadres</StyledH2>
          <AddressSearch onChange={handleOnChange} onButtonClick={handleButtonClick} />
        </Box>
      </main>
    </div>
  );
}
