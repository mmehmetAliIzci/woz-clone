import { PostCodeHouseNumber } from '../AddressSearch/helpers/getDutchPostCode';

export interface AddressResponse {
  readonly woonplaats: string;
  readonly postcode: string;
  readonly huisnummer: string;
  readonly huisletter: string;
  readonly huisnummertoevoeging: string;
  readonly openbareruimte: string;
  readonly gebruiksdoelen: string[];
  readonly object_id: string;
}

export const fetchAddress = (address: PostCodeHouseNumber): Promise<AddressResponse | []> => {
  return Promise.resolve([]);
};
