'use client';
/** @jsxImportSource @emotion/react */
import { BoxWithGrayBg } from '../../Atoms/BoxWithGrayBg/BoxWithGrayBg';
import { HouseInformationRow, HouseInformationText } from '../HouseInformation/HouseInformation';
import { numberWithDotSeperator } from './numberWithDotSeperator';
import { flexColumn } from '../../utilityStyles';

export const HouseWozValueBox = ({ wozValues }: { wozValues?: WozValueResponse }) => (
  <BoxWithGrayBg css={flexColumn}>
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
