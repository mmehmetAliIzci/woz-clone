import { GlobalState } from 'little-state-machine';

import { AddressResponse } from '../app/api/address/route';
import { Steps } from './types';

export function selectAddress(
  state: GlobalState,
  payload: {
    selectedAddress: AddressResponse;
  }
) {
  return {
    ...state,
    ...payload,
    step: Steps.ConfirmAddress
  };
}
