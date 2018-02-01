import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Orders from "./Orders";

class App extends React.Component{
  render(){
    return(
      <div className="catch-of-the-day">
      the app
      <Header/>
      <Inventory/>
      <Orders/>
      </div>
    )
  }
}

export default App;