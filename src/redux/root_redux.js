import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";


import userReducer from "./user/user_redux";
import userData from "./userData/userData_redux";
import selectJobDataReducer  from "./client_job/clientJobData_redux";
import appliedDataReducer from "./appliedData/appliedData_redux";
import chatDataReducer from "./chat/chat_redux";

const persistConfig={
    key:"root",
    storage:storageSession,
    whitelist:['user','userData',"selectJobDataReducer",'appliedDataReducer','chatDataReducer']
}

const rootReducer= combineReducers({
    user:userReducer,
    data:userData,
    select:selectJobDataReducer,
    applied:appliedDataReducer,
    chat:chatDataReducer
    
});

export default persistReducer(persistConfig,rootReducer);