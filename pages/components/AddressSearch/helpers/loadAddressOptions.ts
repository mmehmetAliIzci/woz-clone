import { getDutchPostCode } from './getDutchPostCode';
import { fetchAddress } from '../../../core/api/fetchAddress';
import { mapDataToSearchValues } from './mapDataToSearchValues';

export const DEFAULT_LABEL = '';
export const TYPE_HOUSE_POSTCODE = 'Type your postcode and house number Ex: 1234ab 223';
export const TYPE_HOUSE = 'Type your house number Ex: 123';
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
    const postcode = getDutchPostCode(inputValue);
    if (postcode?.postCode) {
      if (postcode?.houseNumber) {
        try {
          const data = await fetchAddress(postcode);
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
