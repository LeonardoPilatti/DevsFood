import styled from 'styled-components';

export const Container = styled.div`
  width: 650px;
  padding: 20px;
  .productArea {
    height: 200px;
    display: flex;
    img {
      width: 310px;
      border-radius: 10px;
    }
    .productInfoArea {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
    }
  }
  .productButtons {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .productDetails {
    h1 {
      margin: 0;
      padding: 0;
      font-size: 30px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
  }
  .productQuantityArea {
    height: 50px;
    display: flex;
    justify-content: space-between;
    .productQuantity {
      display: flex;
      align-items: center;
      background-color: #073c07;
      border-radius: 5px;
      img {
        width: 24px;
        height: auto;
        margin: 0px 10px;
        cursor: pointer;
      }
      p {
        font-size: 25px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  .productPrice {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const ProductButton = styled.button`
  border: 0;
  background-color: #073c07;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: ${(props) => (props.small ? '13px' : '22px')};
  font-weight: bold;
  padding: ${(props) => (props.small ? '5px 10px' : '10px 20px')};
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
