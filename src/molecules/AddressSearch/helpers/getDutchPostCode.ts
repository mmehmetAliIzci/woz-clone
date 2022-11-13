// captures 2 fields => 1st postcode,
// second rest of the string as a house number
import { PostCodeHouseNumber } from './types';

const POSTCODE_REGEX = new RegExp('^([1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2})([0-9]*)', 'i');

export const getDutchPostCode = (potentialCode: string): PostCodeHouseNumber | undefined => {
  const trimmedCode = potentialCode.replace(/ /g, '');
  const match = POSTCODE_REGEX.exec(trimmedCode);
  if (match) {
    // Regexp returns [allstring, firstMatch, secondMatch]
    if (!!match[2]) {
      return {
        postCode: match[1],
        houseNumber: match[2]
      };
    }
    return {
      postCode: match[1]
    };
  } else {
    return undefined;
  }
};
