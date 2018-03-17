import React from "react";

class AddFishForm extends React.Component {


  createFish = (e) => {
    e.preventDefault();
    const fish = {
      name: this.fishName.value,
      price: parseFloat(this.fishPrice.value),
      status: this.fishStatus.value,
      desc: this.fishDesc.value,
      image:this.fishImage.value
    }
    this.props.addFish(fish);
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
        <button type="submit" onClick={this.createFish}>Add Fish</button>
      </form>
    )
  }

}

export default AddFishForm;