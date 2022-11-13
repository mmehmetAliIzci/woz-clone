import { GlobalState } from 'little-state-machine';
import { WozValueResponse } from '../core/api/fetchWOZvalue';

export function setWozValues(
  state: GlobalState,
  payload: {
    wozValues: WozValueResponse;
  }
) {
  return {
    ...state,
    ...payload
  };
}
