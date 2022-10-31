import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Main from "../components/Main/Main";
import ItemDetailContainer from "../containers/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";
import NotFound from "../components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "../containers/CartContainer/CartContainer";
import Footer from "../components/Footer/Footer";

export const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
