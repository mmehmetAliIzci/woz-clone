import { StyledH2 } from '../shared/Typography/h2';
import styled from '@emotion/styled';
import { loadAddressOptions } from './helpers/loadAddressOptions';
import { useRouter } from 'next/router';
import { useDebounce } from '../../helpers/debounce';
import AsyncSelect from 'react-select/async';

const AddressSearchWrapper = styled.div`
  border-radius: 8px;
  background: rgb(235, 236, 240);
  padding: 16px;
  min-height: 88px;
  display: flex;
`;

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
  const router = useRouter();

  const debouncedLoadOptions = useDebounce(loadAddressOptions, 1000);

  return (
    <>
      <StyledH2>Woonadres</StyledH2>
      <AddressSearchWrapper>
        <AsyncSelect
          cacheOptions
          isClearable
          backspaceRemovesValue={false}
          instanceId={'1'}
          styles={customStyles}
          // AsyncSelect expects Promise returns when async function supplied
          // However this is not necessary
          /*// @ts-ignore */
          loadOptions={debouncedLoadOptions}
          onChange={(newValue: unknown) => {
            console.warn(newValue);
          }}
          placeholder="Type uw postcode en huisnummer"
        />
        <button
          onClick={() => {
            router.push('/woz-check/confirmation');
          }}
        >
          Volgende
        </button>
      </AddressSearchWrapper>
    </>
  );
};
