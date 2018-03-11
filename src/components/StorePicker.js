import React from "react";

class StorePicker extends React.Component{
  render(){
    // Component classes always get a render method
    return (
    // Always only return a SINGLE JSX element. Everything else must be nested
            <form className="store-selector">
              { /* This how to comment in JSX :-! Best to avoid!*/ }
              { /* Must use JS block comments with asterisks. // will comment out the end of curly brackets*/ }
              { /* Also never comment with curly brackets right below "return!"It will give an error */}
              <h2>Please enter a store</h2>
              <input type="text" placeholder="Store Name" required/>
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