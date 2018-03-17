import React from "react";

class AddFishForm extends React.Component {

  addFish = (e) => {
    e.preventDefault();
    const fishDetails = {
      name: this.fishName.value,
      price: this.fishPrice.value,
      status: this.fishStatus.value,
      desc: this.fishDesc.value,
      image:this.fishImage.value
    }   
    console.log(fishDetails)
  }

  render(){
    return(
      <form className="fish-edit" onSubmit={this.addFish}> 
        <input name="name" type="text" placeholder="name" ref={ input => this.fishName = input}/>
        <input name="price" type="text" placeholder="price" ref={ input => this.fishPrice = input} />
        <select name="status" type="text" ref={ input => this.fishStatus = input }>
          <option value="available">fresh!</option>
          <option vlaue="unavailable">sold out</option>
        </select>
        <textarea name="desc" placeholder="desc"  ref={ input => this.fishDesc = input}/>
        <input name="image" type="text" placeholder="image"  ref={ input => this.fishImage = input}/>
        <button type="submit">Add Fish</button>
      </form>
    )
  }

}

export default AddFishForm;