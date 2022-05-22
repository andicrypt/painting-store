import React, { useState, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Pagination from "../components/Pagination";
import axios from "axios";

import "../styles/Menu.css";

function Menu() {
  const [allProducts, setAllProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const idxLastProduct = currentPage * productsPerPage;
  const idxFirsProduct = idxLastProduct - productsPerPage;

  const currentProducts = allProducts.slice(idxFirsProduct, idxLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/')
  //   .then(response => {
  //     console.log(response.data);
  //     console.log(response.data[0].img);
  //     setAllProducts(response.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, [])


  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {currentProducts.map((menuItem, key) => {
          return (
            <div>
              <MenuItem
                key={key}
                image={menuItem.img}
                name={menuItem.name}
                price={menuItem.price}
                pass={key + idxFirsProduct}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={MenuList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Menu;
