import React from 'react';
import styled from 'styled-components';

export const Orders = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: 'The Chelsea Boot',
      qty: 1,
      price: '$235',
    },
    {
      id: 2,
      name: 'The Twill Snap Backpack',
      qty: 1,
      price: '$65',
    },
    {
      id: 3,
      name: 'The Twill Zip Tote',
      qty: 1,
      price: '$48',
    },
  ]);

  return (
    <div>
      <Title>Order Summary</Title>
      <ul>
        {data.map(({ id, name, qty, price }) => (
          <li key={id}>
            {name} {qty} {price}
          </li>
        ))}
      </ul>

      <hr />
      <Summary>
        <p>Subtotal</p>
        <p>Shipping</p>
        <p>Taxes</p>
        <hr />
        <p>Total</p>
      </Summary>
    </div>
  );
};

const Title = styled.h5`
  font-size: 1.2em;
  color: #9932cc;
  margin: 12px;
`;

const Summary = styled.div`
  flex-flow: column;
`;
