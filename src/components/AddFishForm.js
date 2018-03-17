import React from "react";

class AddFishForm extends React.Component {

  addFish = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <form className="fish-edit" onSubmit={this.addFish}> 
        <input name="name" type="text" placeholder="name" />
        <input name="price" type="text" placeholder="price" />
        <select name="status" type="text">
          <option value="available">fresh!</option>
          <option vlaue="unavailable">sold out</option>
        </select>
        <textarea name="desc" placeholder="desc" />
        <input name="image" type="text" placeholder="image" />
        <button type="submit">Add Fish</button>
      </form>
    )
  }

}

export default AddFishForm;