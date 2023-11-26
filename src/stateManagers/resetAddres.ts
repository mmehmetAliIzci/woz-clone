import { GlobalState } from 'little-state-machine';

import { Steps } from './types';

export function resetAddress(state: GlobalState) {
  return {
    ...state,
    selectedAddress: undefined,
    wozValues: undefined,
    step: Steps.SelectAddress
  };
}
