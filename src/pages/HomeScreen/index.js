import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CategoryArea, CategoryList, ProductArea } from './styled';
import ReactTooltip from 'react-tooltip';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';

export default () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  const [activeCategory, setActiveCategory] = React.useState(0);

  const getProducts = async () => {
    const prods = await api.getProducts();
    if (prods.error === '') {
      setProducts(prods.result.data);
    }
  };

  React.useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      if (cat.error === '') {
        /// se não ocorreu erros, irá salvar o cat;
        setCategories(cat.result);
      }
      ReactTooltip.rebuild(); // para ele recarregar e adicionar as tooltips depois nas categorias;
    };
    getCategories();
  }, []);

  React.useEffect(() => {
    getProducts();
  }, [activeCategory]);

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
                name: 'Todas as categorias',
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
      {products.length > 0 && (
        <ProductArea>
          <div className="productList">
            {products.map((item, index) => (
              <ProductItem key={index} data={item} />
            ))}
          </div>
        </ProductArea>
      )}
    </Container>
  );
};
