import styled from '@emotion/styled';
import { loadAddressOptions } from './helpers/loadAddressOptions';
import { useDebounce } from '../../helpers/debounce';
import AsyncSelect from 'react-select/async';
import { AddressResponse } from '../../core/api/types';
import { SingleValue } from 'react-select';
import { Button } from '../../core/components/Button/Button';
import { lightTheme } from '../../pages/_app';

const AddressSearchWrapper = styled.div`
  border-radius: 8px;
  background: rgb(235, 236, 240);
  padding: 16px;
  min-height: 88px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const customStyles = {
  option: (provided: any, state: { isSelected: any; isDisabled: any }) => ({
    ...provided,
    opacity: 1,
    padding: '10px 20px',
    color: lightTheme.colors.primaryText
  }),
  control: (provided: any) => ({
    ...provided,
    padding: 10
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
    width: '100%'
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0
  })
};

export interface SelectItem {
  color: string;
  label: string;
  value: AddressResponse;
}

export const AddressSearch = ({
  onChange,
  onButtonClick
}: {
  onChange: (value: SingleValue<SelectItem>) => void;
  onButtonClick: () => void;
}) => {
  const debouncedLoadOptions = useDebounce(loadAddressOptions, 1000);

  return (
    <>
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
          onChange={onChange}
          placeholder="Type uw postcode en huisnummer"
        />
        <Button primary onClick={onButtonClick}>
          Volgende
        </Button>
      </AddressSearchWrapper>
    </>
  );
};
