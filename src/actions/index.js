import * as type from './../constant/ActionsType';

export const actAddToCart = (product, quantity) => {

	return({
		type : type.ADD_TO_CART,
		product,
		quantity
	})
}

export const actChangeMessage = (message) =>{
	return{
		type: type.CHANGE_MSG,
		message
	}
}

export const actDeleteProductOnCart = (product) =>{
	return{
		type : type.DELETE_PRODUCT_ON_CART,
		product
	}
}
export const actIncreaseAmountProductOnCart = (product) =>{
	return{
		type: type.INCREASE_AMOUNT_PRODUCT_ON_CART, 
		product
	}
}
export const actDecreaseAmountProductOnCart = (product) =>{
	return{
		type: type.DECREASE_AMOUNT_PRODUCT_ON_CART, 
		product
	}
}
export const actBuyProduct = (carts) =>{
		return {
			type : type.BUY,
			carts
		}
}