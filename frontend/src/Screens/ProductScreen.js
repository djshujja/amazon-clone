import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.name} srcset="" />
        </div>
        <div className="details-info">
          <ul>
            <h4>{product.name}</h4>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div className="">{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:
              <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </li>
            <li>
              <button className="button primary">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductScreen;
