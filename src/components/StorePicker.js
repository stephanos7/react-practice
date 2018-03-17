import React from "react";

import { getFunName } from "../helpers";

class StorePicker extends React.Component{

  goToStore = (event) => {
    event.preventDefault();
    console.log(this.formInput);
  }

  render(){
    // Component classes always get a render method
    return (
    // Always only return a SINGLE JSX element. Everything else must be nested
            <form className="store-selector" 
                  onSubmit={this.goToStore}
                  ref={ input =>  this.formInput = input }>
              <h2>Please enter a store</h2>
              <input type="text" placeholder="Store Name" required defaultValue={getFunName()}/>
              <button type="submit">Visit Store</button>
            </form>
            )
    // RETURN: When evaluating JSX, return needs to take parenthesis.
    //         This is because when we write multiple JSX lines, return, (being alone on a single line),
    //         will inherit a ";" when compiled thus returning nothing!
    // INPUT: Note than in JSX, contraty to Html5, tags with no closing tag
    //        MUST BE SELFCLOSED (<input/>, <img/>, <br/>)
  }
}

export default StorePicker;