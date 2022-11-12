import { PostCodeHouseNumber } from '../AddressSearch/helpers/getDutchPostCode';

export interface AddressResponse {
  readonly woonplaats?: string;
  readonly postcode?: string;
  readonly huisnummer?: string;
  readonly huisletter?: string;
  readonly huisnummertoevoeging?: string | null;
  readonly openbareruimte?: string;
  readonly gebruiksdoelen: string[];
  readonly object_id: string;
}

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
