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

  return (
    <>
      <SummaryTitle>Order Summary</SummaryTitle>

      <SummaryWrap>
        <SummaryList>
          {orders.map(({ id, img, title, color, qty, price }) => (
            <SummaryItem key={id}>
              <img src={img} alt={title} />

              <ProductInfo>
                <span>{title}</span>
                <span>{color}</span>
                <span>Quantity: {qty}</span>
              </ProductInfo>

              <span>${price}</span>
            </SummaryItem>
          ))}
        </SummaryList>

        <SummaryCost>
          <SummaryCostInner>
            <span>Subtotal</span>
            <span>$300</span>
          </SummaryCostInner>
          <SummaryCostInner>
            <span>Shipping</span>
            <span>Free</span>
          </SummaryCostInner>
          <SummaryCostInner>
            <span>Taxes</span>
            <span>$12</span>
          </SummaryCostInner>
          <hr />

          <SummaryCostInner>
            <SummaryTotal>Total</SummaryTotal>
            <SummaryTotal>$12</SummaryTotal>
          </SummaryCostInner>
        </SummaryCost>
      </SummaryWrap>
    </>
  );
};
