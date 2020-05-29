import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart.js'
import * as mess from './../constant/Message.js'
import CartItem from './../components/CartItem'
import CartResults from './../components/CartResults.js'
import {actChangeMessage, actDeleteProductOnCart, 
  actIncreaseAmountProductOnCart,
  actDecreaseAmountProductOnCart,
  actBuyProduct} from './../actions/index.js'


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
                      onDeleteCart = {this.props.onDeleteCart}
                      onChangeMsg = {this.props.onChangeMsg}
                      onIncreaseAmountproduct = {this.props.onIncreaseAmountproduct}
                      onDecreaseAmountproduct = {this.props.onDecreaseAmountproduct}
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
          result = <CartResults carts = {carts}  onBuy = {this.props.onBuy}
          onChangeMsg = {this.props.onChangeMsg}
           />
          
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
    ).isRequired,
  onDeleteCart: PropTypes.func.isRequired,
  onChangeMsg: PropTypes.func.isRequired,
  onDecreaseAmountproduct: PropTypes.func.isRequired,
  onIncreaseAmountproduct: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>
{
    return ({
      carts: state.carts
    })
}
const mapDispatchToProps = (dispatch, props) =>{
  return({
      onDeleteCart : (product) => {
        dispatch(actDeleteProductOnCart(product))
      }, 
      onChangeMsg: (msg) =>{
        dispatch(actChangeMessage(msg));
      },
      onIncreaseAmountproduct: (product) =>{
        dispatch(actIncreaseAmountProductOnCart(product))
      },
      onDecreaseAmountproduct: (product) =>{
        dispatch(actDecreaseAmountProductOnCart(product))
      },
      onBuy: (carts)=>{
        dispatch(actBuyProduct(carts))
      }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
