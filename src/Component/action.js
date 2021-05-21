import  {REMOVE_FROM_CART} from "../Component/types"
export const DecUp=()=>{
    return {type:'DECREMENT'}
}

    export function removeFromCart(index){
        return{
            type: 'REMOVE_FROM_CART',
            payload:index,
        }
    }