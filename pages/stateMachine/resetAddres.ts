import { GlobalState } from 'little-state-machine';
import { Steps } from '../../global';

export function resetAddress(state: GlobalState) {
  return {
    ...state,
    selectedAddress: undefined,
    wozValues: undefined,
    step: 'SelectAddress' as Steps
  };
}
