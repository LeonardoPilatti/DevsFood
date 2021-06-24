const initialState = {
  products: [],
  addres: [],
  discount: 0, // se tiver desconto, irá armazenar aqui;
  delivery: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      let products = [...state.products];
      let id = action.payload.data.id;

      let index = products.findIndex((item) => item.id === id);
      if (index > -1) {
        products[index].qtd += action.payload.qtd;
      } else {
        products.push({
          ...action.payload.data,
          qtd: action.payload.qtd,
        });
      }
      return { ...state, products: products };
      break;

    //   case 'SET_TOKEN':
    //     return { ...state, token: action.payload.token };
    //     break;
    //   case 'SET_NAME':
    //     return { ...state, name: action.payload.name };
    //     break;
  }

  return state;
};
