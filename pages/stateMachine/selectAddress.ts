import { GlobalState } from 'little-state-machine';
import { AddressResponse } from '../core/api/fetchAddress';

export function selectAddress(
  state: GlobalState,
  payload: {
    selectedAddress: AddressResponse;
  }
) {
  return {
    ...state,
    ...payload
  };
}
