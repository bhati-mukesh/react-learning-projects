import { ADD_TO_CART } from '../constants'


// const initialState = {
//     cartData : []
// }

const reducer = (prevState=[],action)=>{
    switch(action.type){
        case ADD_TO_CART: 
                return [
                    ...prevState,
                    {cartData:action.payload}
                ]
        default: return prevState
    }
}


export default reducer