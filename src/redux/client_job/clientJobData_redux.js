const INITIAL_STATE={
    selectJobData:null
}

const selectJobDataReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SET_SELECT_JOB_DATA":{
            return{
                ...state,
                selectJobData:action.payload
            }
        }
    
        default:return state;
    }
};
export default selectJobDataReducer;