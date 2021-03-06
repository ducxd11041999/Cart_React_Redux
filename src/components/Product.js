import React, { Component } from 'react';
import * as msg from './../constant/Message.js'

class Product extends Component {
      render(){
      var {product} = this.props;  
      return (
           <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src= {product.Image}
                            className="img-fluid" alt={product.name} />
                        <a href = "localhost:3000">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href = "localhost:3000">{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                                {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a href = "localhost:3000" 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" data-placement="top" title="" 
                                data-original-title="Add to Cart"
                                onClick = { () =>this.onAddToCart(product)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) =>{
            this.props.onAddToCart(product)
            this.props.onChangeMsg(msg.MSG_ADD_TO_CART_SUCCESS)
        }
    showRating(rating){
        var result = [];
        for(var i = 0 ; i< rating ; i++)
        {
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for(i = rating ; i< 5 ; i++)
        {
            result.push(<i key={i} className="fa fa-star-o"></i>)
        }
        return result;
    }
}

export default Product;
