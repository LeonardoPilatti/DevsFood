import React from 'react';
import { Container, ProductButton } from './styled';
import { useDispatch } from 'react-redux'; /// é importante para usar o redux;

export default ({ data, setStatus }) => {
  const dispatch = useDispatch();

  const [qtd, setQtd] = React.useState(1);

  React.useEffect(() => {
    // para quando mudar o data, ou seja, mudar o produto, o qtd voltar para 1;
    setQtd(1);
  }, [data]);

  const handleCancelButton = () => {
    // esse eh para fechar o modal no cancelar;
    setStatus(false);
  };

  const handleMinusQt = () => {
    if (qtd > 1) {
      setQtd(qtd - 1);
    }
  };

  const handlePlusQt = () => {
    setQtd(qtd + 1);
  };

  const handleAddToCart = () => {
    // juntar as informações; // 3 passos para seguir;
    // mandar isso pro reducer;
    // fechar o modal
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        data,
        qtd,
      },
    });

    setStatus(false); // fecha o modal;
  };

  return (
    <Container>
      <div className="productArea">
        <img src={data.image} alt={`Foto de ${data.name}`} />
        <div className="productInfoArea">
          <div className="productDetails">
            <h1>{data.name}</h1>
            <p>{data.ingredients}</p>
          </div>
          <div className="productQuantityArea">
            <div className="productQuantity">
              <img
                onClick={handleMinusQt}
                src="/assets/minus.png"
                alt="Diminuir a quantidade"
              />
              <p>{qtd}</p>
              <img
                onClick={handlePlusQt}
                src="/assets/plus.png"
                alt="Aumentar a quantidade"
              />
            </div>
            <div className="productPrice">
              {/* .toFixed para ficar só duas casas depois da virgula */}
              R$ {(data.price * qtd).toFixed(2).replace('.', ',')}
            </div>
          </div>
        </div>
      </div>
      <div className="productButtons">
        <ProductButton small={true} onClick={handleCancelButton}>
          Cancelar
        </ProductButton>
        <ProductButton onClick={handleAddToCart}>
          Adicionar ao carrinho
        </ProductButton>
      </div>
    </Container>
  );
};
