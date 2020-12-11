const INITIAL_STATE={
    chatData:null
}

const chatDataReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SET_CHAT_DATA":{
            return{
                ...state,
                 chatData:action.payload
            }
        }
    
        default:return state;
    }
};

export default chatDataReducer;