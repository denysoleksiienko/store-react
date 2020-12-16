import React from 'react';
import { SummaryTitle, SummaryWrap, SummaryList, SummaryCost, SummaryItem, SummaryTotal } from 'styled';

export const Orders = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: 'The Chelsea Boot',
      color: 'black',
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
    <>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryWrap>
        <SummaryList>
          {data.map(({ id, name, qty, price, color }) => (
            <SummaryItem key={id}>
              <span>
                {name} {price}
              </span>
              <span>{color}</span>
              <span>Quantity: {qty}</span>
            </SummaryItem>
          ))}
        </SummaryList>

        <SummaryCost>
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Taxes</p>
          <hr />
          <SummaryTotal>Total</SummaryTotal>
        </SummaryCost>
      </SummaryWrap>
    </>
  );
};
