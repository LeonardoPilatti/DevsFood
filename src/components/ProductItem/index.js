import React from 'react';
import { Container } from './styled';

export default ({ data }) => {
  return (
    <Container>
      <div className="productPhotoArea">
        <img src={data.image} alt={`Foto de ${data.name}`} />
      </div>
      <div className="productInfoArea">
        <h1>{data.name}</h1>
        <p className="price">R$ {data.price}</p>
        <p className="ingredients">{data.ingredients}</p>
      </div>
      <div className="productButtonArea">
        <img src="/assets/next.png" alt={`Ir para o produto ${data.name}`} />
      </div>
    </Container>
  );
};
