'use client';
import { BoxWithGrayBg } from '../../Atoms/BoxWithGrayBg/BoxWithGrayBg';
import { AddressResponse } from '../../core/api/types';

export const HouseAddressBox = ({ address }: { address?: AddressResponse }) => (
  <BoxWithGrayBg>
    <span>{`${address?.openbareruimte || ''}, ${address?.huisnummer || ''} ${
      address?.huisnummertoevoeging || ''
    } ${address?.postcode || ''} ${address?.woonplaats || ''}`}</span>
  </BoxWithGrayBg>
);
