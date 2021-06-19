import React from 'react';
import { Container } from './styled';

export default ({ data, activeCategory, setActiveCategory }) => {
  const handleCategoryClick = () => {
    setActiveCategory(data.id);
  };

  return (
    <Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
    >
      <img src={data.image} alt="" />
    </Container>
  );
};
