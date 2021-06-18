import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styled';

import api from '../../api';

import Header from '../../components/Header';

export default () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = React.useState('');

  React.useEffect(() => {
    const getCategories = async () => {
      const categories = await api.getCategories();
      console.log(categories);
    };
    getCategories();
  }, []);

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
    </Container>
  );
};
