import axios from "axios";

const PRODUCT_URL = "https://65cb00b0efec34d9ed8687c0.mockapi.io/product";

const getProducts = () => {
  return axios
    .get(PRODUCT_URL)
    .then((rpta) => {
      return rpta.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProductsById = (id) => {
  return axios
    .get(`${PRODUCT_URL}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const saveProduct = (product) => {
  return axios
    .post(PRODUCT_URL, product)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateProduct = (product) => {
  return axios
    .put(`${PRODUCT_URL}/${product.id}`, product)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export { getProducts, getProductsById, saveProduct, updateProduct };
