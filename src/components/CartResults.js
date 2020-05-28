import React, { Component } from 'react';

class CartResults extends Component {

    showToatalAmount =(carts)=>{
        var total = 0;
        for(var i = 0 ; i < carts.length ; i++)
        {
            total += carts[i].product.price * carts[i].quantity;
        }
        return total;
    }
      render(){
       // console.log(this.props.carts)
        var {carts} = this.props;
      return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showToatalAmount(carts)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartResults;
