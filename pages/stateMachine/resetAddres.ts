import { GlobalState } from 'little-state-machine';

export function resetAddres(state: GlobalState) {
  return {
    ...state,
    selectedAddress: undefined,
    wozValues: undefined
  };
}
