import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip'; /// npm install react-tooltip;

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
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem
            title="Pedidos"
            icon="/assets/order.png"
            link="/orders"
          />{' '}
          {/* Orders: esse é o de pedidos */}
          <MenuItem
            title="Meu Perfil"
            icon="/assets/profile.png"
            link="/profile"
          />
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
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />{' '}
        {/* ele está no menuItem, com os atributos data para funcionar o Tooltip */}
      </Container>
    </BrowserRouter>
  );
};
