import React from "react";

class Fish extends React.Component {

  render(){

    const {image, price, desc, name, status} = this.props.details;

    return (
      <li className="menu-fish">
        <img src={image} alt={desc} />
        <h3 className="fish-name">
          {name}
          <span className="price">{price}</span>
        </h3>
      </li>
    )
  }
}

export default Fish;