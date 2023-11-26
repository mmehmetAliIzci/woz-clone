import { AddressResponse } from '../../../../app/api/address/route';

export interface AddressOption {
  readonly value: AddressResponse | string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const mapDataToSearchValues = (addressResponses: AddressResponse[]): AddressOption[] =>
  addressResponses.map((value) => ({
    value,
    label: `${value.openbareruimte || ''}, ${value.huisnummer || ''} ${
      value.huisnummertoevoeging || ''
    } ${value.postcode || ''} ${value.woonplaats || ''}`,
    color: '#EBECF0'
  }));
