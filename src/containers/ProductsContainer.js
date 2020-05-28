import React, { Component } from 'react';
import {connect} from 'react-redux'
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions/index.js'
class ProductsContainer extends Component {
    render(){

      var {products} = this.props;
      return (
           <Products>
              {this.showProducts(products)}
           </Products>
        );
    }

    showProducts(products)
    {
          var result = null;
          if(products.length > 0 ){
              result = products.map((product, index) =>{
                  return <Product key = {index}  product = { product } 
                  onAddToCart = {this.props.onAddToCart}
                  onChangeMsg = {this.props.onChangeMsg}
                  />
              });
          }
          return result;  
    }
}

ProductsContainer.propTypes = {
  products : PropTypes.arrayOf(
          PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            Image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            iventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
          }) 
    ).isRequired,
  onChangeMsg: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>
{
    return (
    {
          products: state.products
    })
}
const mapDispatchToProps = (dispatch, props) =>{
  return({
      onAddToCart: (product) =>{
          dispatch(actAddToCart(product, 1));
      },
      onChangeMsg: (msg) =>{
        dispatch(actChangeMessage(msg));
      }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
