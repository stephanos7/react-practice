import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Orders from "./Orders";

class App extends React.Component{
  state = {
    fishes : {},
    orders : {}
  }

  addFish = fish => {
    const fishes = {...this.state.fishes};

    fishes[`fish${Date.now()}`] = fish;

    this.setState({ fishes });
  }

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Inventory addFish={this.addFish}/>
        <Orders />
      </div>
    )

  }
}

export default App;