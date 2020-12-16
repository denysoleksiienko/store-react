import React from 'react';
import {
  SummaryTitle,
  SummaryWrap,
  SummaryList,
  SummaryCost,
  SummaryItem,
  SummaryItemInfo,
  SummaryTotal,
  ProductInfo,
} from 'styled';

export const Orders = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: 'The Chelsea Boot',
      color: 'Black',
      qty: 1,
      price: '$235',
      img: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'The Twill Snap Backpack',
      color: 'Reverse Denim + Brown leather',
      qty: 1,
      price: '$65',
      img: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      name: 'The Twill Zip Tote',
      color: 'Reverse Denim + Black leather',
      qty: 1,
      price: '$48',
      img: 'https://via.placeholder.com/80',
    },
  ]);

  return (
    <>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryWrap>
        <SummaryList></SummaryList>
        {data.map(({ id, img, name, color, qty, price }) => (
          <SummaryItem key={id}>
            <SummaryItemInfo>
              <img src={img} alt={name} />

              <ProductInfo>
                <span>{name}</span>
                <span>{color}</span>
                <span>{qty}</span>
              </ProductInfo>

              <span>{price}</span>
            </SummaryItemInfo>
          </SummaryItem>
        ))}

        <SummaryCost>
          {/* ToDo: Think over the structure */}
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
