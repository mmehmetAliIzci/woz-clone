import 'little-state-machine';
import { AddressResponse } from './pages/core/api/fetchAddress';
import { WozValueResponse } from './pages/core/api/fetchWOZvalue';

declare module 'little-state-machine' {
  interface GlobalState {
    selectedAddress?: AddressResponse;
    wozValues?: WozValueResponse;
  }
}
