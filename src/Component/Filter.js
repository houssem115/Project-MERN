import React, { Component } from "react";
import { connect } from "react-redux";

class Filter extends Component {
  const []
  render() {
    return (
   
       
        <div>
          {this.props.count}prduitt
          <div>
            Order
          <select
           
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
       
        Filter
          <select
            value={this.props.setCategori}
            onChange={(e) =>
              this.props.filterProducts(this.props.cart, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="decor_maison">decor maison</option>
            <option value="decor_jardin">decor jardin</option>
            <option value="arbre">arbre</option>
            <option value="plante">plante</option>
            
          </select>
        </div>
      
    );
  }
}
export default Filter


{/*connect(
  (state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);*/}