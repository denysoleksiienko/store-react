import { ProductInfo, SummaryItem } from 'styled';

export const OrderItem = (props) => (
  <SummaryItem>
    <img src={props.img} alt={props.title} />

    <ProductInfo>
      <span>{props.title}</span>
      <span>{props.color}</span>
      <span>Quantity: {props.qty}</span>
    </ProductInfo>

    <span>${props.price}</span>
  </SummaryItem>
);
