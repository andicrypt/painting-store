import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css"

function MenuItem({ image, name, price, pass }) {
  //console.log(pass)
  return (
    <Link
      to="/product"
      state={{ image: image , name: name, price, price, pass: pass}}
      style={{ textDecoration: "none" }}
    >
      <div className="menuItem" style={{padding: 20}}>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h2>{name}</h2>
        <h4>${price}</h4>
      </div>
    </Link>
  );
}

export default MenuItem;
