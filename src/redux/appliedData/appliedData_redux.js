const INITIAL_STATE={
    appliedData:null
}

const appliedDataReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SET_APPLIED_DATA":{
            return{
                ...state,
                appliedData:action.payload
            }
        }
    
        default:return state;
    }
};

export default appliedDataReducer;