import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoutes from './components/PrivateRoutes';
import MenuItem from './components/MenuItem';
import Carrinho from './components/Carrinho';

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/store.png" link="/" />
          <MenuItem icon="/assets/order.png" link="/orders" />{' '}
          {/* Orders: esse é o de pedidos */}
          <MenuItem icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoutes path="/orders">
              <div>Tela de Pedidos</div>
            </PrivateRoutes>
            <PrivateRoutes path="/profile">
              <div>Tela de Perfil</div>
            </PrivateRoutes>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Carrinho />
      </Container>
    </BrowserRouter>
  );
};
