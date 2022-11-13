import { GlobalState } from 'little-state-machine';
import { AddressResponse } from '../core/api/fetchAddress';
import { Steps } from '../../global';

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
