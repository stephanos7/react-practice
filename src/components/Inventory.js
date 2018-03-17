import React from "react";
import addFishForm from "./addFishForm";

class Inventory extends React.Component{
  render(){
    return(
      <div className="inventory">
        <h2>Inventory</h2>
        <addFishForm />
      </div>
    )
  }
}

export default Inventory;