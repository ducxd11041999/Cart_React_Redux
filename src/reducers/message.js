import * as type from './../constant/ActionsType.js'
import * as msg from './../constant/Message.js'
var initialState = msg.MSG_WELCOME;
	
const messages = (state = initialState, action) =>{
	switch(action.type)
	{

		case type.CHANGE_MSG:
			//console.log(action.message)
			return action.message
		default:
			return [...state];
	}
}


export default messages
