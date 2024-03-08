import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { getProductsById } from "../services/itemServices";
import { IoPencil } from "react-icons/io5";
import { UserContext } from "../context/userContext";

const SingleProduct = () => {
  const { isUserOnline } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    stock: 0,
    discount: false,
    amount_discount: 0,
    price: 0,
  });
  const { id } = useParams();
  useEffect(() => {
    getProductsById(id)
      .then((respuesta) => {
        setForm({ ...respuesta });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(form);
  const disc_obj = (form) => {
    if (form.discount == true) {
      return (
        <>
          <p className="ps-5 fs-3">
            <s>{`S/${form.price}`}</s>
          </p>
          <p className="display-2 ps-5">
            {`S/${form.price - (form.price * form.amount_discount) / 100}`}{" "}
            <strong className="fs-3 text-danger">{`${form.amount_discount}% OFF`}</strong>
          </p>
        </>
      );
    } else {
      return <p className="p-5 display-2">{`S/. ${form.price}`}</p>;
    }
  };

  const { addProductToCart } = useContext(CartContext);

  return (
    <>
      <div className="container d-flex gap-3 mt-3">
        <img src="https://picsum.photos/600" className="img-fluid" alt="..." />
        <div>
          <h2 className="p-4">
            {form.name}
            {console.log(form)}
            {isUserOnline ? (
              <Link to={`/updateproduct/${id}`}>
                <IoPencil />
              </Link>
            ) : (
              <></>
            )}
          </h2>

          <p className="p-5 fs-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit veniam incidunt debitis culpa laudantium porro eveniet
            placeat cupiditate repellat, consectetur quos aperiam fugit
            obcaecati provident molestias suscipit beatae amet fugiat.
          </p>
          {disc_obj(form)}
          <div className="ps-5 pb-3">
            <label htmlFor="quantityInput">Quantity</label>
            <input
              type="number"
              id="quantityInput"
              className="form-control w-25"
              min="1"
              max={form.stock}
            ></input>
          </div>
          <button
            className="ms-5 fs-5 btn btn-primary"
            onClick={() => addProductToCart(form)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
