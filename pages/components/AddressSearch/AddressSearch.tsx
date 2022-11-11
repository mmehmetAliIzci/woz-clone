import { StyledH2 } from '../shared/Typography/h2';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { loadAddressOptions } from './helpers/loadAddressOptions';

const AddressSearchWrapper = styled.div`
  border-radius: 8px;
  background: rgb(235, 236, 240);
  padding: 16px;
  min-height: 88px;
  display: flex;
`;

const AsyncSelect = dynamic(
  import('react-select/async').then((mod) => mod),
  { ssr: false }
);

export const AddressSearch = () => {
  return (
    <>
      <StyledH2>Woonadres</StyledH2>
      <AddressSearchWrapper>
        <AsyncSelect
          cacheOptions
          loadOptions={loadAddressOptions}
          defaultOptions
          placeholder="Type uw postcode en huisnummer"
        />
        <button>Volgende</button>
      </AddressSearchWrapper>
    </>
  );
};
