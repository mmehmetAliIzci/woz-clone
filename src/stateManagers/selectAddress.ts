import { GlobalState } from 'little-state-machine';

import { Steps } from '../../global';
import { AddressResponse } from '../core/api/types';

export function selectAddress(
  state: GlobalState,
  payload: {
    selectedAddress: AddressResponse;
  }
) {
  return {
    ...state,
    ...payload,
    step: 'ConfirmAddress' as Steps
  };
}
