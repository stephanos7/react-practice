import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Orders from "./Orders";
import Fish from "./Fish";

import sampleFishes from "../sample-fishes";

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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes});
  }

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map( element => {
            <p>{element}</p>
            } )}
          </ul>
        </div>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        <Orders />
      </div>
    )

  }
}

export default App;