import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 15px;
`;

export const CategoryArea = styled.div`
  color: #fff;
  margin-top: 20px;
`;
export const CategoryList = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ProductArea = styled.div`
  margin: 20px 0;

  .productList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
`;
