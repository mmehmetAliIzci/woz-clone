import 'little-state-machine';
import { AddressResponse } from './src/core/api/fetchAddress';
import { WozValueResponse } from './src/core/api/fetchWOZvalue';

export type Steps = 'SelectAddress' | 'ConfirmAddress' | 'Result';

declare module 'little-state-machine' {
  interface GlobalState {
    selectedAddress?: AddressResponse;
    wozValues?: WozValueResponse;
    step?: Steps;
  }
}
