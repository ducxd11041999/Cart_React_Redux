import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart.js'
import * as mess from './../constant/Message.js'
import CartItem from './../components/CartItem'
import CartResults from './../components/CartResults.js'
class CartContainer extends Component {
    render(){
      var {carts} = this.props;
      //console.log(carts)
      return (
            <Cart>
                {this.showCartItem(carts)}
                {this.showTotalAmount(carts)}
            </Cart>
        );
    }
    showCartItem = (carts) =>{
      var result =<tr>
                        <td>{mess.MSG_CART_EMPTY}</td>
                  </tr>
      if(carts.length > 0){
          result = carts.map((cart, index) =>{
            return (
                  <CartItem
                      key = {index} 
                      cart = {cart}
                  />
              )
          })
      }
      return result;
    }

    showTotalAmount = (carts) =>{
      var result = null;
      if(carts.length > 0)
      {
          result = <CartResults carts = {carts} />
      }
      return result
    }
}
CartContainer.propTypes = {
  carts : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            Image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            iventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
    ).isRequired
}

const mapStateToProps = (state) =>
{
    return ({
      carts: state.carts
    })
}

export default connect(mapStateToProps, null)(CartContainer);
