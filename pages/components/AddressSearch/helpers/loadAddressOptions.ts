import { getDutchPostCode } from './getDutchPostCode';
import { AddressResponse } from '../../api/fetchAddress';

export interface AddressOption {
  readonly value: AddressResponse | string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const defaultDisabledValue = {
  value: '',
  label: 'Something went wrong',
  color: 'red',
  isFixed: true,
  isDisabled: true
};

export const loadAddressOptions = (
  inputValue: string,
  callback: (options: AddressOption[]) => void
) => {
  // Maybe cache the options loaded since we need to make a call
  if (inputValue) {
    const postcode = getDutchPostCode(inputValue);
    if (postcode?.postCode) {
      if (postcode?.houseNumber) {
        try {
          callback([{ value: '', label: 'HIIIIIITT', color: '' }]);
        } catch (e) {
          callback([{ ...defaultDisabledValue, label: 'Something went wrong' }]);
        }
      }
      callback([{ ...defaultDisabledValue, label: 'Type your house number too' }]);
    }
  }

  callback([{ ...defaultDisabledValue, label: 'Type your postcode and house number' }]);
};
