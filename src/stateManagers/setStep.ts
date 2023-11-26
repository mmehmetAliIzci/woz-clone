import { GlobalState } from 'little-state-machine';
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
