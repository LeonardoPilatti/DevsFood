import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({ icon, link, title }) => {
  const location = useLocation();

  let isActive = location.pathname === link;

  return (
    <LinkArea data-tip={title} data-for="tip-right" active={isActive} to={link}>
      <LinkIcon src={icon} />
    </LinkArea>
  );
};
