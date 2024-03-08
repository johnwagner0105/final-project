import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const existsIndex = cart.findIndex((prod) => prod.id === product.id);
    const quantity = parseInt(document.getElementById("quantityInput").value);
    if (quantity == 0 || quantity > product.stock || isNaN(quantity)) {
      alert("not good");
      return;
    }
    if (existsIndex === -1) {
      console.log(product);
      product.cantidad = quantity;
      console.log(product.cantidad);
      setCart([...cart, product]);
    } else {
      const copyCart = [...cart];
      copyCart[existsIndex].cantidad += quantity;
      setCart(copyCart);
    }
    console.log(typeof product.cantidad);
    console.log(typeof product.price);
  };
  const resetCart = () => {
    setCart([]);
  };
  // const precioTotal = () => {
  //   setTotal(tempTotal);
  // };
  return (
    <CartContext.Provider value={{ cart, addProductToCart, resetCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
