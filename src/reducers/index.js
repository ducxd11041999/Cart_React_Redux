import {combineReducers} from 'redux'
import products from './products'
import carts from './cart.js'
import messages from './message.js'
const appReducers = combineReducers(
{
	products : products,
	carts : carts,
	msg: messages
});

export default appReducers