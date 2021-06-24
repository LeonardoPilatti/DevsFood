import React from 'react';
import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductPaginationArea,
  ProductPaginationItem,
} from './styled';
import ReactTooltip from 'react-tooltip';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default () => {
  const [headerSearch, setHeaderSearch] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);

  const [modalStatus, setModalStatus] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [activeSearch, setActiveSearch] = React.useState('');

  const getProducts = async () => {
    const prods = await api.getProducts(
      activeCategory,
      activePage,
      activeSearch,
    );
    if (prods.error === '') {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
    }
  };

  React.useEffect(() => {
    /// esse useEffect é para ele armazenar o resultado e fazer a busca;
    clearTimeout(searchTimer); /// para ele cancelar os timeout e começar somente 1;

    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);

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
    setProducts([]); // zerar o setProducts para sumir o array e aparecer quando carregar
    getProducts();
  }, [activeCategory, activePage, activeSearch]);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

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
              <ProductItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </ProductArea>
      )}
      {totalPages > 0 && (
        <ProductPaginationArea>
          <div className="productPaginationItem">
            {Array(totalPages)
              .fill(0)
              .map((item, index) => (
                <ProductPaginationItem
                  key={index}
                  active={activePage}
                  current={index + 1}
                  onClick={() => setActivePage(index + 1)}
                >
                  {index + 1}
                </ProductPaginationItem>
              ))}
          </div>
        </ProductPaginationArea>
      )}

      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct data={modalData} setStatus={setModalStatus} />
      </Modal>
    </Container>
  );
};
