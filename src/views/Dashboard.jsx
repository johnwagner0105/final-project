import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

import Carousel from "../Components/Carousel";

const Dashboard = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Dashboard;
