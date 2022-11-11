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

// needed because of client id mismatch
const AsyncSelect = dynamic(
  import('react-select/async').then((mod) => mod),
  { ssr: false }
);

const customStyles = {
  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  }),
  control: (provided: any) => ({
    ...provided
  }),
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  dropdownIndicator: (provided: any) => ({
    ...provided
  }),
  container: (provided: any) => ({
    ...provided,
    width: 400
  })
};

export const AddressSearch = () => {
  return (
    <>
      <StyledH2>Woonadres</StyledH2>
      <AddressSearchWrapper>
        <AsyncSelect
          styles={customStyles}
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
