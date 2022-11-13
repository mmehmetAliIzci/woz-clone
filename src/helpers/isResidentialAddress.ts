import { AddressResponse } from '../core/api/types';

export const isResidentialAddress = (address: AddressResponse) =>
  address.gebruiksdoelen.includes('woonfunctie');
