import {REMOVE_FROM_CART} from "../Component/types";
const initialState= 0
const Reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case REMOVE_FROM_CART : {
            const item_index=action.index
            const new_state={...state};
            delete new_state[item_index];
            return new_state;

        }

    default:
        return state;
    }
}
export default Reducer