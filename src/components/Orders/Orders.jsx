import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
// import './Orders.css';

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
      <Title>Order Summary</Title>
      <Summary>
        <List>
          {data.map(({ id, name, qty, price, color }) => (
            <Item key={id}>
              <span>
                {name} {price}
              </span>
              <span>{color}</span>
              <span>Quantity: {qty}</span>
            </Item>
          ))}
        </List>

        <Cost>
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Taxes</p>
          <hr />
          <p>Total</p>
        </Cost>
      </Summary>
    </>
  );
};

const Title = styled.h5`
  font-size: 1.2em;
  color: #9932cc;
  margin: 12px;
`;

const Summary = styled.div`
  margin-left: 12px;
`;

const Cost = styled.div`
  flex-flow: column;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
