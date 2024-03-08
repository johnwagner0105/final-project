import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Navbar from "./Components/Navbar";
import Footbar from "./Components/Footbar";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SingleProduct from "./views/SingleProduct";
import { CartContextProvider } from "./context/cartContext";
import ListOfObjects from "./views/ListOfObjects";
import AddNewProduct from "./views/AddNewProduct";
import { UserContextProvider } from "./context/userContext";
import UpdateProduct from "./views/UpdateProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <UserContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/products" element={<ListOfObjects />} />
            <Route path="/newproduct" element={<AddNewProduct />} />
            <Route path={"/updateproduct/:id"} element={<UpdateProduct />} />
          </Routes>
          <Footbar />
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
