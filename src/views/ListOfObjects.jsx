import React, { useEffect, useState } from "react";
import ObjectCard from "../Components/ObjectCard";
import { getProducts } from "../services/itemServices";
import { Link } from "react-router-dom";

const ListOfObjects = () => {
  const [productos, setProductos] = useState({
    id: "",
    name: "",
    stock: 0,
    discount: false,
    amount_discount: 0,
    price: 0,
  });
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-5 gap-5 justify-content-center">
        {Object.keys(productos).map((key) => (
          <Link to={`/product/${productos[key].id}`}>
            <ObjectCard key={key} data={productos[key]} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListOfObjects;
