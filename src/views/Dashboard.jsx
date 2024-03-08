import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

import Carousel from "../Components/Carousel";

const Dashboard = () => {
  return (
    <div>
      <h1>Products with discount</h1>
      <Carousel />
    </div>
  );
};

export default Dashboard;
