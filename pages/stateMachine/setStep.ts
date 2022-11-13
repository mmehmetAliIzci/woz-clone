import { GlobalState } from 'little-state-machine';
import { AddressResponse } from '../core/api/fetchAddress';
import { Steps } from '../../global';

export function setStep(
  state: GlobalState,
  payload: {
    step: Steps;
  }
) {
  return {
    ...state,
    ...payload
  };
}
