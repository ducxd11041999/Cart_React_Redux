import React, { Component } from 'react';


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
                        btn-rounded waves-effect waves-light">
                        <a href = "localhost:3000">—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a href = "localhost:3000">+</a>
                    </label>
                </div>
            </td>
            <td>{this.subTotal(cart.quantity, cart.product.price)}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
        );
    }
}

export default CartItem;
