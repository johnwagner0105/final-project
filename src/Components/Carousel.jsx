import React, { useEffect, useState } from "react";
import { getProducts } from "../services/itemServices";
import { Link } from "react-router-dom";

const Carousel = () => {
  let discountProducts = [];
  const [productos, setProductos] = useState([]);
  const [discProducts, setDiscProducts] = useState([]);
  let items_sobrantes = 0;
  let number_slides = 0;

  const [itemsInCarousel, setItemsInCarousel] = useState();
  useEffect(() => {
    let carousel_items = [];
    getProducts()
      .then((response) => {
        setProductos(response);
        // response.map((prod) => {
        // if (prod.discount == true) {
        //   //     setDiscProducts(...discProducts, prod);
        //   console.log(prod);
        //   discountProducts.push(prod);

        //   }
        // });
        discountProducts = response.filter((item) => item.discount == true);
        console.log(discountProducts);
        // console.log(discountProducts[0].nombre);
        items_sobrantes = discountProducts.length % 3;
        number_slides = Math.trunc(discountProducts.length / 3);
        setDiscProducts(discountProducts);
        // console.log(items_sobrantes);
        // console.log(number_slides);
        const carousel_loop = (i) => {
          let items_in_container = [];
          for (let j = 3 * (i - 1); j < i * 3; j++) {
            // console.log(discountProducts[j].nombre);
            items_in_container.push(
              <Link key={j} to={`/product/${discountProducts[j].id}`}>
                <div className="card" style={{ width: "25rem" }}>
                  <img
                    src="https://picsum.photos/600"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{discountProducts[j].name}</h5>
                    <p className="card-text">{discountProducts[j].price}</p>
                    <button className="btn btn-primary">Go somewhere</button>
                  </div>
                </div>
              </Link>
            );
            // return items_in_container;
          }
          return items_in_container;
        };
        for (let i = 1; i <= number_slides; i++) {
          if (i == 1) {
            carousel_items.push(
              <div key={i} className="carousel-item active">
                <div className="container d-flex justify-content-between">
                  {carousel_loop(i)}
                </div>
              </div>
            );
          } else {
            carousel_items.push(
              <div key={i} className="carousel-item">
                <div className="container d-flex justify-content-between">
                  {carousel_loop(i)}
                </div>
              </div>
            );
          }
        }
        // console.log(carousel_items);
        setItemsInCarousel(carousel_items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-5">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">{itemsInCarousel}</div>
        <button
          className="carousel-control-prev bg-dark"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-dark"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
