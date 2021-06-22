import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  display: flex;
  align-items: center;
  color: #136713;
  cursor: pointer;

  .productPhotoArea {
    width: 100px;
    img {
      width: 100%;
    }
  }

  .productInfoArea {
    flex: 1;
    margin: 0 10px;
    p,
    h1 {
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
    .price {
      font-size: 14px;
    }
    .ingredients {
      font-size: 12px;
    }
  }

  .productButtonArea {
    width: 15px;
    img {
      width: 100%;
    }
  }
`;
