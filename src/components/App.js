import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Orders from "./Orders";

class App extends React.Component{
  render(){

    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={102}/>
        </div>
        <Inventory />
        <Orders />
      </div>
    )

  }
}

export default App;