import React from 'react';
import { Container } from './styled';

export default () => {
  return (
    <Container>
      <div className="productArea">
        <img src="" alt="" />
        <div className="productInfoArea">
          <div className="productDetails"></div>
          <div className="productQuantityArea"></div>
        </div>
      </div>
      <div className="productButtons"></div>
    </Container>
  );
};
