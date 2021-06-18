import React from 'react';
import { Route, useHistory } from 'react-router-dom';
/// aqui é para fazer rotas protegidas, para caso tentar entrar sem estar logado;

import { useSelector } from 'react-redux'; /// para usar o token;

export default ({ children, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  const history = useHistory();

  if (!token || token === '') {
    /// se token for vazio, não tem ninguém logado, então vai para a tela de login, se token não existir;
    history.push('/login');
    return null;
  }

  return <Route {...rest}>{children}</Route>;
};
