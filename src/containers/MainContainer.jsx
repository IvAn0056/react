import React, { useState, useEffect } from "react";
import "../styles/MainContainer.scss";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";

const API = 'https://api.escuelajs.co/api/v1/products';

const MainContainer = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-containerMC">
      <div className="cards-containerMC">
        {products.map(product => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};

export default MainContainer;
