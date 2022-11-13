import { AddressResponse } from '../core/api/fetchAddress';

export const isResidentialAddress = (address: AddressResponse) =>
  address.gebruiksdoelen.includes('woonfunctie');
