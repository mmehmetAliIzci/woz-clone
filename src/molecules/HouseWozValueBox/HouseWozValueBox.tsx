/** @jsxImportSource @emotion/react */
import { BoxWithGrayBg } from '../../core/components/BoxWithGrayBg/BoxWithGrayBg';
import { WozValueResponse } from '../../core/api/fetchWOZvalue';
import { HouseInformationRow, HouseInformationText } from '../HouseInformation/HouseInformation';
import { numberWithDotSeperator } from '../../helpers/numberWithDotSeperator';
import { flexColumn } from '../../core/components/utilityStyles';

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
