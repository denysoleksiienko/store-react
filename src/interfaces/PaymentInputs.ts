export interface IPaymentInputs {
  getCardNumberProps: Function;
  getExpiryDateProps: Function;
  getCVCProps: Function;
  getCardImageProps: Function;
}

export interface ICreditCard {
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidNumber?: boolean;
  isInvalidNumber?: boolean;
  isValidDate?: boolean;
  isInvalidDate?: boolean;
  isValidCvc?: boolean;
  isInvalidCvc?: boolean;
  errorNumber?: string;
  errorExpiryDate?: string;
  errorCvc?: string;
}
