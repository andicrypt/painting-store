import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Product.css";
import axios from "axios";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Product() {
  const [products, setProducts] = useState([]);
  const [pos, setPos] = useState();
  const [img, setImg] = useState("../assets/product.jpg");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [des, setDes] = useState("");
  const [rating, setRating] = useState("");

  const [itemCount, setItemCount] = useState(0);

  const location = useLocation();
  const { pass } = location.state;

  console.log(pass);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/")
  //     .then((response) => {
  //       setImg(response.data[pass].img);
  //       setName(response.data[pass].name);
  //       setPrice(response.data[pass].price);
  //       setProducts(response.data);
  //       setStock(response.data[pass].stock);
  //       setDes(response.data[pass].description);
  //       setRating(response.data[pass].avgRating);
  //       console.log(response.data[pass].desciption)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="product">
      <div>
        <img src={img} alt="Logo" />
      </div>
      <div className="detail">
        <h1>{name}</h1>
        <h4>Price: {price}</h4>
        <h4>Rating: {rating}</h4>
        <h4>Stock: {stock}</h4>
        <p>Description: {des}</p>

        <div style={{ display: "block", padding: 0 }}>
          <div>
            <Badge color="secondary" badgeContent={itemCount}>
              <ShoppingCartIcon />{" "}
            </Badge>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0));
                }}
              >
                {" "}
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                onClick={() => {
                  setItemCount(itemCount + 1);
                }}
              >
                {" "}
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
