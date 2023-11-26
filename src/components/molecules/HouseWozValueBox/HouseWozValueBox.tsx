'use client';
/** @jsxImportSource @emotion/react */
import { BoxWithGrayBg } from '../../Atoms/BoxWithGrayBg/BoxWithGrayBg';
import { HouseInformationRow, HouseInformationText } from '../HouseInformation/HouseInformation';
import { numberWithDotSeperator } from './numberWithDotSeperator';
import { WozValueResponse } from '../../../app/api/woz-value/route';

export const HouseWozValueBox = ({ wozValues }: { wozValues?: WozValueResponse }) => (
  <BoxWithGrayBg style={{ flexDirection: 'column' }}>
    <HouseInformationRow>
      <HouseInformationText>Huidige WOZ-waarde</HouseInformationText>
      <HouseInformationText>€ {numberWithDotSeperator(wozValues?.wozValue)}</HouseInformationText>
    </HouseInformationRow>
    <HouseInformationRow>
      <HouseInformationText>Eerlijke WOZ-waarde</HouseInformationText>
      <HouseInformationText>€ {numberWithDotSeperator(wozValues?.eWozValue)}</HouseInformationText>
    </HouseInformationRow>
  </BoxWithGrayBg>
);
