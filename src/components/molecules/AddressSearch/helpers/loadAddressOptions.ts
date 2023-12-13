import { mapDataToSearchValues } from './mapDataToSearchValues';
import { parseAddress } from './parseAddress';

export const DEFAULT_LABEL = '1234ab 99';
export const TYPE_HOUSE_POSTCODE = 'Type uw postcode en huisnummer ex: 1234ab 99';
export const TYPE_HOUSE = 'Type uw huisnummer ';
export const SOMETHING_WRONG = 'Er its fouts gegaan';

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
            `/api/address?postcode=${address.postCode}&houseNumber=${address.houseNumber}`
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
