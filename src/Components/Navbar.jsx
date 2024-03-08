import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const { changeUserLogin, isUserOnline } = useContext(UserContext);
  const { cart, resetCart } = useContext(CartContext);

  const tableInCart = (cart) => {
    let items = "";
    let total = 0;
    for (const object in cart) {
      total += cart[object].cantidad * cart[object].price;
      items += `<tr><td>${cart[object].name}</td>
      <td>${cart[object].cantidad}</td><td>${cart[object].price}</td><td>${
        cart[object].cantidad * cart[object].price
      }</td></tr>`;
    }
    return `<table class="table table-dark"><thead class="table-primary"><td>Objeto</td><td>Cantidad</td><td>Precio Unitario</td><td>Precio de objeto</td></thead>${items}
    <tr class="table-primary"><td colspan=3>Total</td><td>${total}</td></tr></table>`;
  };

  const alert = () => {
    // console.log(tableInCart(cart));
    Swal.fire({
      title: "Items in Cart",
      width: 600,
      html: tableInCart(cart),
      showDenyButton: true,
      denyButtonText: "Keep Buying",
      confirmButtonText: "Make payment",
    }).then((result) => {
      if (result.isConfirmed) {
        resetCart();
        Swal.fire(
          "Thanks for buying! Keep spending money on us!",
          "",
          "success"
        );
      } else if (result.isDenied) {
        Swal.fire("Keep buying more!", "", "info");
      }
    });
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg pt-4 pb-4 d-flex flex-column">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex m-auto w-75" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => changeUserLogin()}>
                <a className="nav-link active" aria-current="page" href="#">
                  {isUserOnline ? (
                    <p>Hi, User</p>
                  ) : (
                    <div>
                      <p>Account</p>
                      <p>Sign In</p>
                    </div>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={alert}
                  href="#"
                >
                  <p>
                    <i className="fs-4 fa-solid fa-cart-shopping text-2xl text-gray-300 position-relative">
                      <span className="fs-6 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                      </span>
                    </i>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to={"/products"}
          className="align-self-center link-underline link-underline-opacity-0 fs-4"
        >
          <div>See all products</div>
        </Link>
        {isUserOnline ? (
          <Link
            to={"/newproduct"}
            className="align-self-center link-underline link-underline-opacity-0 fs-4"
          >
            <div>Add new product</div>
          </Link>
        ) : (
          <div></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
