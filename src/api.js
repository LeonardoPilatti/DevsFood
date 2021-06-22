let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
  getCategories: async () => {
    const response = await fetch(BASE + '/categories');
    const json = await response.json();
    return json;
  },
  getProducts: async (category, page, search) => {
    let fields = {};
    if (category !== 0) {
      /// se for diferente de zero;
      fields.category = category;
    }
    if (page > 0) {
      fields.page = page;
    }
    if (search !== '') {
      fields.search = search;
    }

    // {category: 2, page: 1, search: 'bolo}; // isso é a forma como é mandado; /// OBJETO 1;
    // "category=2&page=1&search=bolo"; // isso é o que tenho que fazer para pesquisar e aparecer na url; OBJETO 2;

    let queryString = new URLSearchParams(fields).toString(); /// ele transforma o objeto 1 no objeto 2

    const response = await fetch(BASE + '/products?' + queryString);
    const json = await response.json();
    return json;
  },
};
