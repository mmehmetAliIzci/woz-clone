import 'little-state-machine';
import '@emotion/react';
import { AddressResponse } from '@api/address/route';
import { Steps } from './src/stateManagers/types';
import { WozValueResponse } from '@api/woz-value/route';

declare module 'little-state-machine' {
  interface GlobalState {
    selectedAddress?: AddressResponse;
    wozValues?: WozValueResponse;
    step?: Steps;
  }
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      light: string;
      primary: string;
      primaryText: string;
      secondary: string;
      gray: string;
      backgroundColor: string;
    };
  }
}
