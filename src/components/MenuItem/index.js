import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({ icon, link }) => {
  const location = useLocation();

  let isActive = location.pathname === link;

  return (
    <LinkArea active={isActive} to={link}>
      <LinkIcon src={icon} />
    </LinkArea>
  );
};
