import { GlobalState } from 'little-state-machine';
import { WozValueResponse } from '../app/api/woz-value/route';

import { Steps } from './types';

export function setWozValues(
  state: GlobalState,
  payload: {
    wozValues: WozValueResponse;
  }
) {
  return {
    ...state,
    ...payload,
    step: Steps.Result
  };
}
