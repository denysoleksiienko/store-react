import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { ICountrySelect } from 'interfaces/Countries';

export const CountrySelect: React.FC<ICountrySelect> = ({
  placeholder,
  onChange,
  options,
  selected,
  isValid,
  isInvalid,
}) => (
  <Typeahead
    id="basic-typeahead-single"
    placeholder={placeholder}
    onChange={onChange}
    options={options}
    selected={selected}
    isValid={isValid}
    isInvalid={isInvalid}
  />
);
