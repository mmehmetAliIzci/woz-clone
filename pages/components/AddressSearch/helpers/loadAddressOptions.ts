import { getDutchPostCode } from './getDutchPostCode';
import { fetchAddress } from '../../api/fetchAddress';
import { mapDataToSearchValues } from './mapDataToSearchValues';

export const DEFAULT_LABEL = '';
// TODO: be more helpful guiding users what to put
export const TYPE_HOUSE_POSTCODE = 'Type your postcode and house number';
export const TYPE_HOUSE = 'Type your house number too';
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
