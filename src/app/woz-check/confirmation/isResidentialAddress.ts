import { AddressResponse } from '../../api/address/route';

export const isResidentialAddress = (address: AddressResponse) =>
  address.gebruiksdoelen.includes('woonfunctie');
