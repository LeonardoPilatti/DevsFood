import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ff0000;
  height: 100vh;
`;

export const Menu = styled.div`
  display: flex;
  background-color: #136713;
  width: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageBody = styled.div`
  display: flex;
  background-color: #00980d;
  background-image: url('/assets/bg.png');
  flex: 1;
  overflow-y: auto; // para ele ter scroll verticalmente quando for necessário;
`;
