import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CategoryArea, CategoryList } from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = React.useState('');
  const [categories, setCategories] = React.useState([]);

  const [activeCategory, setActiveCategory] = React.useState(0);

  React.useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      if (cat.error === '') {
        /// se não ocorreu erros, irá salvar o cat;
        setCategories(cat.result);
      }
    };
    getCategories();
  }, []);

  React.useEffect(() => {}, [activeCategory]);

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <CategoryArea>
          <p>Selecione uma categoria</p>
          <CategoryList>
            <CategoryItem
              data={{
                id: 0,
                title: 'Todas as categorias',
                image: '/assets/food-and-restaurant.png',
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((item, index) => (
              <CategoryItem
                key={index}
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </CategoryList>
        </CategoryArea>
      )}
    </Container>
  );
};
