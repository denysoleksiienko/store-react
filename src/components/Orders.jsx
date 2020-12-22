import React from 'react';
import {
  SummaryTitle,
  SummaryWrap,
  SummaryList,
  SummaryCost,
  SummaryItem,
  SummaryTotal,
  ProductInfo,
  SummaryCostInner,
} from 'styled';

export const Orders = ({ orders, fetchProducts }) => {
  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let Subtotal = 0;

  return (
    <>
      <SummaryTitle>Order Summary</SummaryTitle>

      <SummaryWrap>
        <SummaryList>
          {orders.map(({ id, img, title, color, qty, price }) => {
            Subtotal += price;

            return (
              <SummaryItem key={id}>
                <img src={img} alt={title} />

                <ProductInfo>
                  <span>{title}</span>
                  <span>{color}</span>
                  <span>Quantity: {qty}</span>
                </ProductInfo>

                <span>${price}</span>
              </SummaryItem>
            );
          })}
        </SummaryList>

        <SummaryCost>
          <SummaryCostInner>
            <span>Subtotal</span>
            <span>${Subtotal}</span>
          </SummaryCostInner>
          <SummaryCostInner>
            <span>Shipping</span>
            <span>Free</span>
          </SummaryCostInner>
          <SummaryCostInner>
            <span>Taxes</span>
            <span>$10</span>
          </SummaryCostInner>
          <hr />

          <SummaryCostInner>
            <SummaryTotal>Total</SummaryTotal>
            <SummaryTotal>${Subtotal + 10}</SummaryTotal>
          </SummaryCostInner>
        </SummaryCost>
      </SummaryWrap>
    </>
  );
};
