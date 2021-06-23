import styled from 'styled-components';

export const Container = styled.div`
  width: 740px;
  padding: 10px;
  .productArea {
    height: 100px;
    background-color: #ff0000;
    display: flex;
    img {
      width: 310px;
    }
    .productInfoArea {
      flex: 1;
      background-color: #0000ff;
    }
  }
  .productButtons {
    height: 50px;
    background-color: #00ff00;
  }
`;
