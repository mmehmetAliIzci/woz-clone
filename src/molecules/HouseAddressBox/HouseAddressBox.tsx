import { BoxWithGrayBg } from '../../core/components/BoxWithGrayBg/BoxWithGrayBg';
import { AddressResponse } from '../../core/api/fetchAddress';

export const HouseAddressBox = ({ address }: { address?: AddressResponse }) => (
  <BoxWithGrayBg>
    <span>{`${address?.openbareruimte || ''}, ${address?.huisnummer || ''} ${
      address?.huisnummertoevoeging || ''
    } ${address?.postcode || ''} ${address?.woonplaats || ''}`}</span>
  </BoxWithGrayBg>
);
