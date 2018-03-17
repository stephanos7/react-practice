import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {

  render(){

    const {image, price, desc, name, status} = this.props.details;

    return (
      <li className="menu-fish">
        <img src={image} alt={desc} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
      </li>
    )
  }
}

export default Fish;