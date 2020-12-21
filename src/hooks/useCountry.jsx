import React from 'react';

export const useCountry = () => {
  const [country, setCountry] = React.useState(null);
  return {
    country,
    setCountry,
  };
};
