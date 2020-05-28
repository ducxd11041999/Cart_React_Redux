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