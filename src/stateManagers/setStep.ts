import { GlobalState } from 'little-state-machine';
import { AddressResponse } from '../core/api/types';
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
