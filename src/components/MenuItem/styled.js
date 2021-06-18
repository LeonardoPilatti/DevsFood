import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkArea = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${(props) => (props.active ? '#0b4d0b' : 'transparent')};
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all ease 0.2s;
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: auto;
`;
