import { AddressResponse } from './types';
import { PostCodeHouseNumber } from '../../molecules/AddressSearch/helpers/types';

const BASE_API_URL = 'https://api.bestaatditadres.nl/lookup.json';

export const fetchAddress = async (
  address: PostCodeHouseNumber
): Promise<AddressResponse[] | []> => {
  const { postCode, houseNumber } = address;
  try {
    const response = await fetch(
      `${BASE_API_URL}?postcode=${postCode.toUpperCase()}&huisnummer=${houseNumber}`
    );
    return await response.json();
  } catch (e) {
    console.warn('Something went wrong while fetching data');
    throw e;
  }
};
