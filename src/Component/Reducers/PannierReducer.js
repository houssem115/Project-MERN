const PannierReducer = (state = [], action) => {
    
    if(action.type==="AJOUT"){
        
        return [...state,action.payload]
    }else if (action.type==="REMOVE_FROM_CART"){
        return state.filter(el=>el._id!==action.payload)
    }else {
        return state
    }
}

export default PannierReducer;