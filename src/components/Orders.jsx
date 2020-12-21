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

export const Orders = ({ orders, fetchProducts }) => {
  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryWrap>
        <SummaryList></SummaryList>
        {orders.map(({ id, img, title, color, qty, price }) => (
          <SummaryItem key={id}>
            <SummaryItemInfo>
              <img src={img} alt={title} />

              <ProductInfo>
                <span>{title}</span>
                <span>{color}</span>
                <span>{qty}</span>
              </ProductInfo>

              <span>${price}</span>
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
