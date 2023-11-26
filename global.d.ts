import 'little-state-machine';
import '@emotion/react';
import { WozValueResponse } from './src/core/api/fetchWOZvalue';
import { AddressResponse } from './src/app/api/address/route';

export type Steps = 'SelectAddress' | 'ConfirmAddress' | 'Result';

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
    };
  }
}
