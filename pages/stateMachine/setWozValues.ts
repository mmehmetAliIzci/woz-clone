import { GlobalState } from 'little-state-machine';
import { WozValueResponse } from '../core/api/fetchWOZvalue';
import { Steps } from '../../global';

export function setWozValues(
  state: GlobalState,
  payload: {
    wozValues: WozValueResponse;
  }
) {
  return {
    ...state,
    ...payload,
    step: 'Result' as Steps
  };
}
