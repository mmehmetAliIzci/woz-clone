import { mapDataToSearchValues } from './mapDataToSearchValues';
import { parseAddress } from './parseAddress';

export const DEFAULT_LABEL = '';
export const TYPE_HOUSE_POSTCODE = 'Type your postcode and house number';
export const TYPE_HOUSE = 'Type your house number';
export const SOMETHING_WRONG = 'Something went wrong';

export const defaultDisabledValue = {
  value: '',
  label: DEFAULT_LABEL,
  color: '#EBECF0',
  isFixed: true,
  isDisabled: true
};

export const loadAddressOptions = async (inputValue?: string, callback?: any) => {
  if (inputValue) {
    const address = parseAddress(inputValue);
    if (address?.postCode) {
      if (address?.houseNumber) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/address?postcode=${address.postCode}&houseNumber=${address.houseNumber}`
          );

          if (!response.ok) {
            callback([{ ...defaultDisabledValue, label: SOMETHING_WRONG }]);
          }

          const data = await response.json();
          callback(mapDataToSearchValues(data));
        } catch (e) {
          callback([{ ...defaultDisabledValue, label: SOMETHING_WRONG }]);
        }
      }
      callback([{ ...defaultDisabledValue, label: TYPE_HOUSE }]);
    } else {
      callback([{ ...defaultDisabledValue, label: TYPE_HOUSE_POSTCODE }]);
    }
  } else {
    callback([{ ...defaultDisabledValue, label: TYPE_HOUSE_POSTCODE }]);
  }
};
