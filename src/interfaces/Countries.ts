export interface ICountries {
  label: string;
  value: string;
}

export interface ICountrySelect {
  placeholder: string;
  options: ICountries[];
  selected: ICountries[];
  isValid?: boolean;
  isInvalid?: boolean;
  onChange: (e: ICountries[]) => void;
}
