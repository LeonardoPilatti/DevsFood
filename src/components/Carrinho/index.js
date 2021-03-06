import React from 'react';
import { CartArea, CartHeader, CartIcon, CartText, CartBody } from './styled';

export default () => {
  return (
    <CartArea>
      <CartHeader>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu carrinho (x)</CartText>
      </CartHeader>
      <CartBody></CartBody>
    </CartArea>
  );
};
