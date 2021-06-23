import React from 'react';
import { Container } from './styled';

export default ({ status, setStatus, children }) => {
  const handleModalClick = (event) => {
    if (event.target.classList.contains('modalBg')) {
      /// se tiver no evento de click, que mostra onde eu cliquei, se conter (contains) a classe 'modalBg' que é do container do modal, ele irá setar o setStatus como false, para fechar o modal;
      setStatus(false);
    }
  };

  return (
    <Container className="modalBg" status={status} onClick={handleModalClick}>
      <div className="modalBody">{children}</div>
    </Container>
  );
};
