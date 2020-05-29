import * as type from './../constant/ActionsType.js'
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : '';
	
const carts = (state = initialState, action) =>{
	var {product, quantity} = action
	var index = -1;
	//console.log(action)
	switch(action.type)
	{
		case type.ADD_TO_CART:
			index = findProductInCart(product, state)
			console.log(index)
			if(index !== -1)
			{
				state[index].quantity += quantity;
			}else{
				state.push({
					product,
					quantity
				});
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		case type.DELETE_PRODUCT_ON_CART:
			index = findProductInCart(product.product, state)
			console.log(product)
			if(index !== -1)
			{
				state.splice(index, 1)	
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		case type.INCREASE_AMOUNT_PRODUCT_ON_CART:
			index = findProductInCart(product.product, state)
			console.log(index)
			console.log(product)
			if(index !== -1)
			{
				state[index].quantity += 1;	
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		case type.DECREASE_AMOUNT_PRODUCT_ON_CART:
			index = findProductInCart(product.product, state)
			console.log(index)
			console.log(product)
			if(index !== -1)
			{
				state[index].quantity -= 1;	
				if(state[index].quantity === 0)
				{
					state.splice(index, 1);
				}
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		default:
			return [...state]
	}
}
var findProductInCart = (product, carts) =>
{
	var index = -1;
	for(var  i = 0; i< carts.length; i++)
	{
		if(carts[i].product.id === product.id)
		{
			index = i;
			break;
		}
	}
	return index;
}

export default carts
