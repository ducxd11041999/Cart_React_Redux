import React, { Component } from 'react';
import * as msg from './../constant/Message.js'

class CartItem extends Component {

    subTotal = (quantity , price) => 
    {
        return quantity*price;
    } 
      render(){
      var {cart} = this.props; 
      return (
        <tr>
            <th scope="row">
                <img src={cart.product.Image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{cart.product.name}</strong>
                </h5>
            </td>
            <td>{cart.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{cart.quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                             onClick = {() => this.decreaseAmountProduct(cart)}
                        >
                        <a href = "localhost:3000"
                           
                        >—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                            onClick = {() => this.increaseAmountProduct(cart)}
                        >
                        <a href = "localhost:3000">+</a>
                    </label>
                </div>
            </td>
            <td>{this.subTotal(cart.quantity, cart.product.price)}$</td>
            <td>
                <button type="button" 
                className="btn btn-sm btn-primary waves-effect waves-light" 
                data-toggle="tooltip" 
                data-placement="top"
                title="" 
                data-original-title="Remove item"
                onClick = {() => this.onDeleteCart(cart)}
                >
                    X
                </button>
            </td>
        </tr>
        );
    }
    increaseAmountProduct = (cart) =>
    {
       // console.log("Ok")
        this.props.onIncreaseAmountproduct(cart);
        this.props.onChangeMsg(msg.MSG_UPDATE_TO_CART_SUCCESS);
    }

    decreaseAmountProduct = (cart) =>
    {
        //console.log("Ok")
        this.props.onDecreaseAmountproduct(cart);
        this.props.onChangeMsg(msg.MSG_UPDATE_TO_CART_SUCCESS);
    }
    onDeleteCart = (cart) =>{
        this.props.onDeleteCart(cart)
        this.props.onChangeMsg(msg.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
}

export default CartItem;
