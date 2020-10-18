import { ADD_TO_CART } from '../constants'


export const add_to_cart = (data)=>{
    console.log(data)
    return{
        type:ADD_TO_CART,
        payload: data
    }
}

